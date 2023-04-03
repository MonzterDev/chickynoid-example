import { ChickynoidServer, ServerMods } from "Chickynoid";

namespace UseNicerHumanoid {

    export function Setup ( this: typeof UseNicerHumanoid, server: typeof ChickynoidServer ) {
        server.OnPlayerConnected.Connect( ( server, record ) => record.SetCharacterMod( "NicerHumanoid" ) )
    }
}

export = UseNicerHumanoid;
