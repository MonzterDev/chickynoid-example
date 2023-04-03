import CharacterModel from "./CharacterModel";

interface CharacterRecord {
	characterModel: CharacterModel;
	characterData: CharacterData;
	userId: number;
	localPlayer: boolean;

	// Local Data (Client Only)
	frame: number;
	position: Vector3;
}

// Local Data (Client Only)
interface SerializedCharacterData {
	pos: Vector3;
	angle: number;
	stepUp: number;
	flatSpeed: number;
}

interface CharacterData extends SerializedCharacterData {
	targetPosition?: Vector3; // Local Data (Client Only)
	pos?: Vector3; // Only other Clients can access this

	angle: number;
	stepUp: number;
	flatSpeed: number;
}

export = CharacterRecord;
