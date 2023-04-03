export namespace MathUtils {
	export function GroundAccelerate (
		this: typeof MathUtils,
		wishDir: Vector3,
		wishSpeed: number,
		accel: number,
		velocity: Vector3,
		dt: number,
	): Vector3;

	export function Friction ( this: typeof MathUtils, vel: number, fric: number, dt: number ): number;
	export function VelocityFriction ( this: typeof MathUtils, vel: Vector3, fric: number, dt: number ): Vector3;

	export function PlayerVecToAngle ( this: typeof MathUtils, vec: Vector3 ): number;

	export function LerpAngle ( this: typeof MathUtils, a0: number, a1: number, frac: number ): number;

	export function SmoothLerp<T> ( this: typeof MathUtils, a0: T, a1: T, fraction: number, deltaTime: number ): T;

	export function FlatVec ( this: typeof MathUtils, velocity: Vector3 ): Vector3;

	export function Accelerate (
		this: typeof MathUtils,
		wishDir: Vector3,
		wishSpeed: number,
		acceleration: number,
		velocity: Vector3,
		deltaTime: number,
	): Vector3;
}
