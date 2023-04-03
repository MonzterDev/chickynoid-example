import { MathUtils } from "Chickynoid";
import { ChickynoidCommand } from "Chickynoid/Shared/Command";
import { ChickyEnumAnimationChannels, ChickyEnumAnimations } from "Chickynoid/Shared/Enums";
import Simulation from "Chickynoid/Simulation";

namespace WalkingMoveState {

    export function Setup ( this: typeof WalkingMoveState, simulation: Simulation ) {
        this.ModifySimulation( simulation )
    }

    export function ModifySimulation ( this: typeof WalkingMoveState, simulation: Simulation ) {
        simulation.RegisterMoveState(
            "Walking",
            ( simulation, command ) => this.ActiveThink( simulation, command ),
        );
        simulation.SetMoveState( "Walking" )

        simulation.state.up = Vector3.yAxis
    }

    export function ActiveThink ( simulation: Simulation, command: ChickynoidCommand ) {
        let onGround = undefined
        onGround = simulation.DoGroundCheck( simulation.state.pos )

        if ( onGround !== undefined && onGround.normal.Y < simulation.constants.maxGroundSlope ) {
            if ( simulation.state.vel.Y < 0.1 ) {
                const stuck = simulation.CheckGroundSlopes( simulation.state.pos )
                if ( stuck === false ) onGround = undefined
                else onGround.normal = new Vector3( 0, 1, 0 )
            } else onGround = undefined
        }

        let startedOnGround = onGround
        simulation.lastGround = onGround

        let wishDir = undefined
        if ( command.x !== 0 || command.z !== 0 ) {
            wishDir = new Vector3( command.x, 0, command.z ).Unit
            simulation.state.pushDir = new Vector2( command.x, command.z )
        } else simulation.state.pushDir = new Vector2( 0, 0 )

        let flatVel = MathUtils.FlatVec( simulation.state.vel )

        if ( wishDir !== undefined ) {
            if ( onGround ) {
                flatVel = MathUtils.GroundAccelerate(
                    wishDir,
                    simulation.constants.maxSpeed,
                    simulation.constants.accel,
                    flatVel,
                    command.deltaTime
                )

                if ( simulation.state.pushing > 0 ) simulation.characterData.PlayAnimation( ChickyEnumAnimations.Push, ChickyEnumAnimationChannels.Channel0, false )
                else simulation.characterData.PlayAnimation( ChickyEnumAnimations.Walk, ChickyEnumAnimationChannels.Channel0, false )
            } else flatVel = MathUtils.Accelerate(
                wishDir,
                simulation.constants.airSpeed,
                simulation.constants.airAccel,
                flatVel,
                command.deltaTime
            )
        } else {
            if ( onGround !== undefined ) {
                flatVel = MathUtils.VelocityFriction( flatVel, simulation.constants.brakeFriction, command.deltaTime )
                simulation.characterData.PlayAnimation( ChickyEnumAnimations.Idle, ChickyEnumAnimationChannels.Channel0, false )
            }
        }

        simulation.state.vel = new Vector3( flatVel.X, simulation.state.vel.Y, flatVel.Z )

        if ( simulation.state.jump > 0 ) {
            simulation.state.jump -= command.deltaTime
            if ( simulation.state.jump < 0 ) simulation.state.jump = 0
        }

        if ( onGround !== undefined ) {
            if ( command.y > 0 && simulation.state.jump <= 0 ) {
                simulation.state.vel = new Vector3( simulation.state.vel.X, simulation.constants.jumpPunch, simulation.state.vel.Z )
                simulation.state.jump = 0.2
                simulation.state.jumpThrust = simulation.constants.jumpThrustPower
                simulation.characterData.PlayAnimation( ChickyEnumAnimations.Jump, ChickyEnumAnimationChannels.Channel0, true, 0.2 )
            }

            if ( onGround.hullRecord ) {
                const instance = onGround.hullRecord.instance

                if ( instance && instance.IsA( "BasePart" ) ) {
                    const vector3 = <Vector3>instance.GetAttribute( "launch" )
                    if ( vector3 ) {
                        const dir = instance.CFrame.VectorToWorldSpace( vector3 )
                        simulation.state.vel = dir
                        simulation.state.jump = 0.2
                        simulation.characterData.PlayAnimation( ChickyEnumAnimations.Jump, ChickyEnumAnimationChannels.Channel0, true, 0.2 )
                    }
                }
            }
        }

        if ( onGround === undefined ) {
            simulation.state.inAir += command.deltaTime
            if ( simulation.state.inAir > 10 ) simulation.state.inAir = 10

            if ( command.y > 0 ) {
                if ( simulation.state.jumpThrust > 0 ) {
                    simulation.state.vel = simulation.state.vel.add( new Vector3( 0, simulation.state.jumpThrust * command.deltaTime, 0 ) )
                    simulation.state.jumpThrust = MathUtils.Friction(
                        simulation.state.jumpThrust,
                        simulation.constants.jumpThrustDecay,
                        command.deltaTime
                    )
                }

                if ( simulation.state.jumpThrust < 0.001 ) simulation.state.jumpThrust = 0
            } else simulation.state.jumpThrust = 0

            simulation.state.vel = simulation.state.vel.add( new Vector3( 0, simulation.constants.gravity * command.deltaTime, 0 ) )

            if ( simulation.state.vel.Y <= 0.01 && simulation.state.inAir > 0.5 ) simulation.characterData.PlayAnimation( ChickyEnumAnimations.Fall, ChickyEnumAnimationChannels.Channel0, false )
        } else simulation.state.inAir = 0

        let stepUpResult = undefined
        let [walkNewPos, walkNewVel, hitSomething] = simulation.ProjectVelocity( simulation.state.pos, simulation.state.vel, command.deltaTime )

        if ( onGround === undefined && hitSomething === true ) {
            const groundCheck = simulation.DoGroundCheck( walkNewPos )

            if ( groundCheck !== undefined ) walkNewVel = simulation.CrashLand( walkNewVel, command, groundCheck )
        }

        if ( onGround !== undefined && hitSomething === true && simulation.state.jump === 0 ) {
            stepUpResult = simulation.DoStepUp( simulation.state.pos, simulation.state.vel, command.deltaTime )
        }

        if ( stepUpResult !== undefined ) {
            simulation.state.stepUp += stepUpResult.stepUp
            simulation.state.pos = stepUpResult.pos
            simulation.state.vel = stepUpResult.vel
        } else {
            simulation.state.pos = walkNewPos
            simulation.state.vel = walkNewVel
        }


        if ( true ) {
            if ( startedOnGround !== undefined && simulation.state.jump === 0 && simulation.state.vel.Y <= 0 ) {
                const stepDownResult = simulation.DoStepDown( simulation.state.pos )
                if ( stepDownResult !== undefined ) {
                    simulation.state.stepUp += stepDownResult.stepDown
                    simulation.state.pos = stepDownResult.pos
                }
            }
        }

        if ( simulation.constants.aimlock === 1 ) {
            if ( command.fa ) {
                const vec = command.fa.sub( simulation.state.pos )

                simulation.state.targetAngle = MathUtils.PlayerVecToAngle( vec )
                simulation.state.angle = MathUtils.LerpAngle(
                    simulation.state.angle,
                    simulation.state.targetAngle,
                    simulation.constants.turnSpeedFrac * command.deltaTime
                )
            }
        } else {
            if ( wishDir !== undefined ) {
                simulation.state.targetAngle = MathUtils.PlayerVecToAngle( wishDir )
                simulation.state.angle = MathUtils.LerpAngle(
                    simulation.state.angle,
                    simulation.state.targetAngle,
                    simulation.constants.turnSpeedFrac * command.deltaTime
                )
            }
        }
    }
}


export = WalkingMoveState;
