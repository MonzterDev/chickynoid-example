import { ChickynoidServer } from "Chickynoid";
import PlayerRecord from "Chickynoid/Server/PlayerRecord";

namespace BasicCullingMod {

    export function Setup ( this: typeof BasicCullingMod, server: typeof ChickynoidServer ) {

    }

    export function CanPlayerSee ( this: typeof BasicCullingMod, sourcePlayer: PlayerRecord, otherPlayer: PlayerRecord ) {
        if ( sourcePlayer.chickynoid === undefined ) return true
        if ( otherPlayer.chickynoid === undefined ) return true

        const posA = sourcePlayer.chickynoid.simulation.state.pos
        const posB = otherPlayer.chickynoid.simulation.state.pos

        if ( posA.sub( posB ).Magnitude > 350 ) return false

        return true
    }
}

export = BasicCullingMod;
