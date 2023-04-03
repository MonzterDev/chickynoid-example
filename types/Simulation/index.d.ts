import CharacterData from "../Shared/CharacterData";
import { ChickynoidCommand } from "../Shared/Command";
import { SimulationConstants } from "./simulation-constants";
import { SimulationState } from "./simulation-state";

type MoveState = "Flying" | "Walking"

type ThinkFunc = ( simulation: Simulation, command: ChickynoidCommand ) => void;

interface HullRecord {
	instance?: Instance;
	hull: { ed: number; n: Vector3; planeNum: number }[];
}

interface DoGroundCheck {
	allSolid: boolean;
	checks: number;
	endPos: Vector3;
	fraction: number;
	hullRecord: HullRecord;
	normal: Vector3;
	planeD: number;
	planeNum: number;
	startPos: Vector3;
	startSolid: boolean;
}

interface Simulation {
	state: SimulationState;
	constants: SimulationConstants;
	userId: number;
	lastGround: unknown | undefined;
	characterData: CharacterData;

	RegisterMoveState (
		name: string,
		/** Runs while active */
		activeThink?: ThinkFunc,
		/** Runs every frame. */
		alwaysThink?: ThinkFunc,
		startState?: ThinkFunc,
		/** Cleanup */
		lastThink?: unknown | undefined,
	): void;

	GetMoveState (): {
		name: MoveState;
	};
	SetMoveState ( moveState: MoveState ): void;

	SetPosition ( position: Vector3, teleport: boolean ): void;
	SetAngle ( angle: number, teleport: boolean ): void;

	ProjectVelocity (
		startPos: Vector3,
		startVel: Vector3,
		deltaTime: number,
	): LuaTuple<[movePos: Vector3, moveVel: Vector3, hitSomething: boolean]>;

	OnGround (): DoGroundCheck
	DoGroundCheck ( pos: Vector3 ): DoGroundCheck | undefined;
	CheckGroundSlopes ( pos: Vector3 ): boolean;

	GetStandingPart (): Instance | undefined;

	CrashLand ( velocity: Vector3, command: ChickynoidCommand, groundCheck: DoGroundCheck ): Vector3;

	DoStepUp (
		position: Vector3,
		velocity: Vector3,
		deltaTime: number,
	): undefined | { pos: Vector3; stepUp: number; vel: Vector3 };
	DoStepDown ( position: Vector3 ): undefined | { pos: Vector3; stepDown: number };
}

interface SimulationConstructor {
	/**
	 * Constructed internally. Do not use directly.
	 * @private
	 */
	new(): Simulation;
}

declare const Simulation: SimulationConstructor;
export = Simulation;
