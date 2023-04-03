interface ServerScriptService extends Instance {
	Examples: Folder & {
		ServerMods: Folder & {
			Hitpoints: ModuleScript;
			UseNicerHumanoid: ModuleScript;
			KillBrick: ModuleScript;
			ServerFastProjectiles: ModuleScript;
			BasicWeapons: ModuleScript;
			BasicCulling: ModuleScript;
		};
	};
	TS: Folder & {
		chickynoid: Script;
		Bots: Script;
	};
}
