import { ChickynoidServer } from "Chickynoid";
import PlayerRecord from "Chickynoid/Server/PlayerRecord";
import { ChickynoidCommand } from "Chickynoid/Shared/Command";
import { ChickyEnumEvents } from "Chickynoid/Shared/Enums";

type Event = {
    t: number;
    command: ChickynoidCommand;
};

let nextValidBotUserId = 26_000
const debugPlayers: PlayerRecord[] = [];

const invalidUserIds: Map<number, number> = new Map( [
    [26_003, 1],
    [26020, 1],
    [26021, 1],
    [26038, 1],
    [26075, 1],
    [26068, 1],
    [26056, 1],
    [26084, 1],
    [26025, 1],
    [26066, 1],
    [26049, 1],
    [26045, 1],
    [26083, 1],
    [26058, 1],
    [26047, 1],
    [26055, 1],
    [26032, 1],
    [26105, 1],
    [26110, 1],
    [26118, 1],
] )

export function MakeBots ( amount: number, freeze?: boolean ) {
    math.randomseed( 1 );

    if ( amount > 200 ) amount = 200;

    for ( let counter = 1; counter < amount; counter++ ) {
        let userId = nextValidBotUserId;

        while ( invalidUserIds.get( userId ) !== undefined ) userId += 1;

        nextValidBotUserId = userId + 1;
        userId = -userId;

        const playerRecord = ChickynoidServer.AddConnection( userId, undefined );

        if ( !playerRecord ) continue;

        playerRecord.name = `RandomBot${counter}`;
        playerRecord.respawnTime = tick() + counter * 0.1;

        playerRecord.waitTime = 0;
        playerRecord.leftOrRight = 1;

        if ( math.random() > 0.5 ) playerRecord.leftOrRight = -1;

        // Spawn in someplace
        playerRecord.OnBeforePlayerSpawn.Connect( () => playerRecord.chickynoid?.SetPosition( new Vector3( math.random( -350, 350 ), 100, math.random( -350, 350 ) ).add( new Vector3( -250, 0, 0 ) ), true ) );


        debugPlayers.push( playerRecord );

        playerRecord.BotThink = ( deltaTime ) => {
            if ( freeze ) return;

            if ( playerRecord.waitTime > 0 ) playerRecord.waitTime -= deltaTime;

            const event: Event = {
                t: ChickyEnumEvents.Command,
                command: {
                    l: playerRecord.frame,
                    x: 0,
                    y: 0,
                    z: 0,
                    serverTime: tick(),
                    deltaTime: deltaTime,
                },
            };

            if ( playerRecord.waitTime <= 0 ) {
                event.command.x = math.sin( playerRecord.frame * 0.03 * playerRecord.leftOrRight );
                event.command.y = 0;
                event.command.z = math.cos( playerRecord.frame * 0.03 * playerRecord.leftOrRight );

                if ( math.random() < 0.05 ) event.command.y = 1;
            }

            if ( math.random() < 0.01 ) playerRecord.waitTime = math.random() * 5;

            playerRecord.frame += 1;

            if ( playerRecord.chickynoid )
                playerRecord.chickynoid.HandleEvent( ChickynoidServer, event );
        };
    }
}
