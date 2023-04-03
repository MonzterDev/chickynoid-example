import { ChickynoidServer } from "Chickynoid";
import PlayerRecord from "Chickynoid/Server/PlayerRecord";

namespace Hitpoints {

    export function Setup ( this: typeof Hitpoints, server: typeof ChickynoidServer ) {
        server.OnPlayerSpawn.Connect( ( playerRecord ) => {
            playerRecord.hitPoints = 100
        } )
    }

    export function Step ( this: typeof Hitpoints, server: typeof ChickynoidServer, deltaTime: number ) {
        const playerRecords = server.GetPlayers()
        playerRecords.forEach( ( record ) => {
            if ( record.chickynoid === undefined ) return

            if ( record.hitPoints <= 0 ) record.Despawn()
        } )
    }

    export function DamagePlayer ( this: typeof Hitpoints, playerRecord: PlayerRecord, damage: number ) {
        playerRecord.hitPoints -= damage
    }

    export function GetPlayerHitPoints ( this: typeof Hitpoints, playerRecord: PlayerRecord ) {
        return playerRecord.hitPoints
    }

    export function SetPlayerHitPoints ( this: typeof Hitpoints, playerRecord: PlayerRecord, hp: number ) {
        playerRecord.hitPoints = hp
    }
}

export = Hitpoints;
