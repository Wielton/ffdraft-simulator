import { defineStore, storeToRefs } from "pinia";
// import { usePlayerDataStore } from './playerData'


export const useAIdraftStore = defineStore("AIdraft", () => {
  // const { top200 } = storeToRefs(usePlayerDataStore())
  function addPlayerAI(rosterSpots, bestAvailablePlayersByPosition) {

    // const availablePlayers = draftList.value
    // I have the available roster spots as an array of objects with name key, a position key, and an empty player key and best available players at each position
    // I can analyze the roster spots by need: 
        // 1. if all available, take best player
        //     This will always be the AI's first pick.
        //     Only 2 possible QB's( Mahomes && Hurts) and 1 TE(Travis Kelce) would be taken in 1st round
        //     Most rosters will select a WR or RB with 1st and 2nd picks except for players mentioned above.
        // 2. The next step will be to check the two most sought after, most used, and most likely filled positions: 
            
    //    Get the next available flex roster spot
    //     const availableFlexSpot = ref(null)
    //     availableFlexSpot.value = rosterSpots.find(p => p.name.includes("FLEX"))
    //     if(availableFlexSpot.value) {
    //       availableFlexSpot.value.player = bestPlayer.value
    //       console.log("Flex spot added: ", availableFlexSpot.value.player)
    //       removePlayer(availableFlexSpot.value.player)
    //   } else if(bestPlayer.value.Position == "RB") {
    //     const availableFlexSpot = ref(null)
    //     availableFlexSpot.value = rosterSpots.find(p => p.name.includes("FLEX"))
    //     availableFlexSpot.value.player = bestPlayer.value
    //         console.log("Flex spot added: ", availableFlexSpot.value.player)
    //         removePlayer(availableFlexSpot.value.player)
    // } else {
    //     const qb = ref(null)
    //     qb.value = rosterSpots.find(p => p.position == "QB")
    //     if(qb.value){
    //       qb.value.player = topPlayers.value.find(p => p.Position == "QB")
    //       console.log("QB added: ", qb.value.player)
    //       removePlayer(qb.value.player)
    //     } else {
    //         const te = ref(null) 
    //         te.value = rosterSpots.find(p => p.position == "TE")
    //         if(te.value){
    //           te.value.player = topPlayers.value.find(p => p.Position == "TE")
    //           console.log("TE added: ", te.value.player)
    //           removePlayer(te.value.player)
    //         }
    //       }
    //   }
            
  }
  
  return { addPlayerAI }
})