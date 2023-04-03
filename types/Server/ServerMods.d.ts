/** @server */
export namespace ServerMods {
	export function RegisterMods (
		this: typeof ServerMods,
		scope: "servermods" | "characters" | "weapons",
		folder: Instance,
	): void;

	export function GetMod<k extends any> (
		this: typeof ServerMods,
		scope: "servermods" | "weapons" | "characters",
		name: ServerModName,
	): k;

	export function GetMods ( this: typeof ServerMods, scope: "servermods" | "weapons" | "characters" ): [ServerModName];

	export type ServerModName =
		| "Hitpoints"
		| "KillBrick"
		| "BasicCulling"
		| "ServerFastProjectiles"
		| "UseNicerHumanoid";
}
