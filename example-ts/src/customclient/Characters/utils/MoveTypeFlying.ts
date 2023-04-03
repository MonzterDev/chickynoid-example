import { MathUtils } from "Chickynoid";
import { ChickynoidCommand } from "Chickynoid/Shared/Command";
import { ChickyEnumAnimationChannels, ChickyEnumAnimations } from "Chickynoid/Shared/Enums";
import Simulation from "Chickynoid/Simulation";

namespace FlyingMoveState {

    export function ActiveThink ( this: typeof FlyingMoveState, simulation: Simulation, command: ChickynoidCommand ) {
        let wishDir: Vector3 | undefined;
        if ( command.x || command.y || command.z ) {
            wishDir = new Vector3( command.x, command.y, command.z ).Unit;
            simulation.state.pushDir = new Vector2( command.x, command.z );
        } else simulation.state.pushDir = new Vector2();

        if ( !wishDir )
            simulation.characterData.PlayAnimation(
                ChickyEnumAnimations.Idle,
                ChickyEnumAnimationChannels.Channel0,
                false,
            );
        else {
            simulation.state.vel = MathUtils.GroundAccelerate(
                wishDir,
                simulation.constants.maxSpeed,
                simulation.constants.accel,
                simulation.state.vel,
                command.deltaTime,
            );

            simulation.characterData.PlayAnimation(
                ChickyEnumAnimations.Walk,
                ChickyEnumAnimationChannels.Channel0,
                false,
            );
        }

        simulation.state.vel = MathUtils.VelocityFriction(
            simulation.state.vel,
            simulation.constants.flyFriction,
            command.deltaTime,
        );

        const [walkNewPos, walkNewVel, hitSomething] = simulation.ProjectVelocity(
            simulation.state.pos,
            simulation.state.vel,
            command.deltaTime,
        );
        simulation.state.pos = walkNewPos;
        simulation.state.vel = walkNewVel;

        if ( wishDir ) {
            simulation.state.targetAngle = MathUtils.PlayerVecToAngle( wishDir );
            simulation.state.angle = MathUtils.LerpAngle(
                simulation.state.angle,
                simulation.state.targetAngle,
                simulation.constants.turnSpeedFrac * command.deltaTime,
            );
        }
    }

    export function AlwaysThink ( this: typeof FlyingMoveState, simulation: Simulation, command: ChickynoidCommand ) {
        // if ( !simulation.state.flyingCooldown ) return;
        // if ( simulation.state.flyingCooldown > 0 )
        //     simulation.state.flyingCooldown = math.max( simulation.state.flyingCooldown - command.deltaTime, 0 );

        // if ( simulation.state.flyingCooldown === 0 && command.flying === 1 ) {
        //     simulation.state.flyingCooldown = 0.5;
        //     simulation.SetMoveState( simulation.GetMoveState().name === "Flying" ? "Walking" : "Flying" );
        // }
    }

    export function StartState ( this: typeof FlyingMoveState, simulation: Simulation, command: ChickynoidCommand ) {
        simulation.state.vel = new Vector3( 0, 100, 0 );
    }

    export function ModifySimulation ( this: typeof FlyingMoveState, simulation: Simulation ) {
        simulation.RegisterMoveState(
            "Flying",
            ( simulation, command ) => this.ActiveThink( simulation, command ),
            ( simulation, command ) => this.AlwaysThink( simulation, command ),
            ( simulation, command ) => this.StartState( simulation, command ),
            undefined,
        );

        simulation.constants.flyFriction = 0.2;
        simulation.state.flyingCooldown = 0;
    }
}

export = FlyingMoveState;
