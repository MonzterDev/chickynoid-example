import { ChickynoidServer, ServerMods } from "Chickynoid";
import Hitpoints from "./Hitpoints";

namespace KillBrick {

    export function Setup ( this: typeof KillBrick, server: typeof ChickynoidServer ) {
    }

    export function Step ( this: typeof KillBrick, server: typeof ChickynoidServer, deltaTime: number ) {
        const playerRecords = server.GetPlayers()
        playerRecords.forEach( ( record ) => {
            if ( record.chickynoid === undefined ) return

            const simulation = record.chickynoid.simulation
            const part = simulation.GetStandingPart()

            if ( part ) {
                if ( part.GetAttribute( "kill" ) ) {
                    Hitpoints.SetPlayerHitPoints( record, 0 )
                }
            }
        } )
    }
}

export = KillBrick;
