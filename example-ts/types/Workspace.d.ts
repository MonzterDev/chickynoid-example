interface Workspace extends Model {
	Camera: Camera;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	GameArea: Folder & {
		Cars: Folder;
		KillBrick: Part & {
			ParticleEmitter: ParticleEmitter;
		};
		GameArea2: Folder;
	};
}
