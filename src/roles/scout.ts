import motion = require("../lib/motion")
import u = require("../lib/utils")
import { cN, BodyType } from "../lib/creepNames"

const rS = {
    name: cN.SCOUT_NAME,
    type: BodyType.scout,
   
    run: function(creep: Creep) {
        const targetRoom = creep.memory.targetRoom
        if(!targetRoom || creep.room.name == targetRoom 
            || (Cache.roomData && Cache.roomData[targetRoom] && Cache.roomData[targetRoom].sct > Game.time))
            rS.getNextTarget(creep)
        if(creep.memory.targetRoom)
            motion.newMove(creep, new RoomPosition(25, 25, creep.memory.targetRoom), 24)
    },

    getNextTarget: function(creep){
        const rcache = u.getRoomCache(Game.spawns[creep.memory.city].pos.roomName)
        const targets = u.getsetd(rcache, "scannerTargets", [])
        if(targets.length){
            creep.memory.targetRoom = targets.shift()
            return
        }
        creep.suicide()
    }
}
export = rS
