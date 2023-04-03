import { ReplicatedFirst, ServerScriptService, Workspace } from "@rbxts/services";
import { ChickynoidServer, ServerMods } from "Chickynoid";
import { MakeBots } from "./Bots";

const Chickynoid = ChickynoidServer

Chickynoid.RecreateCollisions( Workspace.GameArea )

ServerMods.RegisterMods( "servermods", ServerScriptService.Examples.ServerMods )
ServerMods.RegisterMods( "characters", ReplicatedFirst.Examples.Characters )
// ServerMods.RegisterMods( "weapons", ReplicatedFirst.Examples.Weapons )

Chickynoid.Setup()

MakeBots( 10 )
