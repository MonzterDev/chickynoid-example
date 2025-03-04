import Signal from "@rbxts/signal";
import { WeaponModule } from "../Shared/WeaponModule";
import ServerChickynoid from "./ServerChickynoid";

interface PlayerRecord {
	userId: number;
	name: string;
	player?: Player;
	allowedToSpawn: boolean;
	respawnDelay: number;
	respawnTime: number;
	slot: number;
	frame: number;

	/** Bot AI */
	waitTime: number;
	/** Bot AI */
	leftOrRight: number;

	/** True if the player is a bot. */
	dummy: boolean;

	chickynoid?: ServerChickynoid;
	characterMod: string;

	OnBeforePlayerSpawn: Signal<() => void>;

	SendEventToClient ( event: unknown ): void;
	SendEventToClients ( event: unknown ): void;

	Despawn (): void;
	Spawn (): ServerChickynoid;
	BotThink?: ( deltaTime: number ) => void;

	SetCharacterMod ( characterModName: string ): void;

	// Mod Data
	currentWeapon: WeaponModule | undefined;
	AddWeaponByName ( name: string, equip: boolean, recordParam?: unknown ): WeaponModule | undefined;
	EquipWeapon ( weaponRecordSerial: number ): void;
	DequipWeapon (): void;
	ClearWeapons (): void;
	RemoveWeaponRecord ( weaponRecord: WeaponModule ): void;
	GetWeapons (): WeaponModule[];
	hitPoints: number;
}

interface PlayerRecordConstructor {
	/**
	 * Constructed internally. Do not use directly.
	 * @private
	 */
	new(): PlayerRecord;
}

declare const PlayerRecord: PlayerRecordConstructor;
export = PlayerRecord;
