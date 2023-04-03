import { ChickynoidServer, ClientMods, ServerMods } from "Chickynoid";

interface BulletRecord {
    position: Vector3,
    vec: Vector3,
    serverTime: number,
    speed: number,
    maxDistance: number,
    drop: number,
    travel: number,
    bulletId: number,

    res?: boolean
    die?: boolean
}

const bullets = new Array<BulletRecord>()
let bulletId = 0

namespace ServerFastProjectiles {

    export function Setup ( this: typeof ServerFastProjectiles, server: typeof ChickynoidServer ) {
    }

    export function FireBullet ( this: typeof ServerFastProjectiles, origin: Vector3, vec: Vector3, speed: number, maxDistance: number, drop: number, serverTime: number ) {
        const bulletRecord: BulletRecord = {
            position: origin,
            vec: vec,
            serverTime: serverTime,
            speed: speed,
            maxDistance: maxDistance,
            drop: drop,
            travel: 0,
            bulletId: bulletId,
        }

        bullets[bulletId] = bulletRecord
        bulletId += 1
        if ( bulletId > 16_000 ) bulletId = 0

        return bulletRecord
    }



    export function Step ( this: typeof ServerFastProjectiles, server: typeof ChickynoidServer, deltaTime: number ) {
        for ( const [key, record] of pairs( bullets ) ) {
            record.serverTime += deltaTime

            const lastPos = record.position

            record.vec.add( new Vector3( 0, record.drop * deltaTime, 0 ) )

            const add = record.vec.mul( record.speed * deltaTime )
            record.position.add( add )
            record.travel += add.Magnitude


            // if ( record.DoCollisionCheck ) Need to extend from ServerMod? Or maybe create a new interface for this?

            if ( record.travel > record.maxDistance ) record.die = true

            if ( record.die ) {

            }
        }
    }
}

export = ServerFastProjectiles;
