import { ReplicatedFirst } from "@rbxts/services"
import { ChickynoidClient, ClientMods } from "Chickynoid"

const Chickynoid = ChickynoidClient

ClientMods.RegisterMods( "clientmods", ReplicatedFirst.Examples.ClientMods )
ClientMods.RegisterMods( "characters", ReplicatedFirst.Examples.Characters )
// ServerMods.RegisterMods( "weapons", ReplicatedFirst.Examples.Weapons )

Chickynoid.Setup()
