const ChickyAnimations = ["Stop", "Idle", "Walk", "Run", "Push", "Jump", "Fall"] as const;
type ChickyAnimation = typeof ChickyAnimations[number];

export const ChickyEnumAnimations: Record<ChickyAnimation, number> = {
    Stop: 0,
    Idle: 1,
    Walk: 2,
    Run: 3,
    Push: 4,
    Jump: 5,
    Fall: 6,
};

const ChickyAnimChannels = ["Channel0", "Channel1", "Channel2", "Channel3"] as const;
type ChickyAnimationChannel = typeof ChickyAnimChannels[number];

export const ChickyEnumAnimationChannels: Record<ChickyAnimationChannel, number> = {
    Channel0: 0,
    Channel1: 1,
    Channel2: 2,
    Channel3: 3,
};

const ChickyEvents = [
    "ChickynoidAdded",
    "ChickynoidRemoving",
    "Command",
    "State",
    "Snapshot",
    "WorldState",
    "CollisionData",
    "ResetConnection",
    "DebugBox",
    "PlayerDisconnected",
] as const;
export type ChickyEvent = typeof ChickyEvents[number];

export const ChickyEnumEvents: Record<ChickyEvent, number> = {
    ChickynoidAdded: 0,
    ChickynoidRemoving: 1,
    Command: 2,
    State: 3,
    Snapshot: 4,
    WorldState: 5,
    CollisionData: 6,
    ResetConnection: 7,

    DebugBox: 11,
    PlayerDisconnected: 12,
};
