import { ChickynoidServer } from "Chickynoid";

namespace BasicWeapons {

    export function Setup ( this: typeof BasicWeapons, server: typeof ChickynoidServer ) {
        server.OnPlayerSpawn.Connect( ( playerRecord ) => {
            playerRecord.AddWeaponByName( "ProjectileSniper", true )
        } )

        server.OnBeforePlayerSpawn.Connect( ( playerRecord ) => {
            playerRecord.chickynoid?.simulation.SetAngle( math.rad( 90 ), true )
        } )

        server.OnPlayerDespawn.Connect( ( playerRecord ) => {
            playerRecord.ClearWeapons()
        } )
    }

    export function Step ( this: typeof BasicWeapons, server: typeof ChickynoidServer, deltaTime: number ) {
    }
}

export = BasicWeapons;
