import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useManagerStore } from './managers'
import { usePlayerDataStore } from './playerData'


export const useRosterStore = defineStore('rosters', () => {
  const { top200 } = storeToRefs(usePlayerDataStore())
  const { manager } = storeToRefs(useManagerStore())
  const roster = ref(
    { manager: manager.value, positions: [{ name: "QB", position: "QB", player: null }, { name: "WR1", position: "WR", player: null }, { name: "WR2", position: "WR", player: null }, { name: "RB1", position: "RB", player: null }, { name: "RB2", position: "RB", player: null }, { name: "TE", position: "TE", player: null }, { name: "FLEX1", position: ["WR", "RB", "TE"], player: null }, { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }] }
  )
  const league = ref([])
  function addPlayer(player) {
    const rosterPlayer = roster.value.positions.find(p => p.position == player.Position && p.player == null)
    if (rosterPlayer) {
      // If there is an open position that matches the player's position, assign the player to that position
      rosterPlayer.player = player
    } else {
      // If all positions are filled, assign the player to the FLEX1 position if it's available
      const flex1 = roster.value.positions.find(p => p.name === 'FLEX1' && p.player === null)
      const flex2 = roster.value.positions.find(p => p.name === 'FLEX2' && p.player === null)

      if (flex1 && flex1.position.includes(player.Position)) {
        flex1.player = player
      } else if(flex2 && flex2.position.includes(player.Position)) {
        // If the FLEX1 position is also filled or doesn't allow the player's position, put into FLEX2
        flex2.player = player
      } else {
        // If the FLEX1 and FLEX2 positions are filled or doesn't allow the player's position, do nothing
        console.log('All positions are filled')
      }
    }
    removePlayer(player)
  }
  //   function addPlayer(player) {
  //     // Edge Cases: 
  //     //  1. If rosterPlayer
  //     console.log(player)
  //     const rosterPlayer = roster.value.positions.find(p => p.position == player.Position && p.player == null)
  //     console.log(rosterPlayer)
  //     // If the main position is filled then check the positions array for the key and if the value is null
  //     rosterPlayer.player = player
  // //     if(rosterPlayer.player != null){
  // //       for(let i = 0; i < rosterPlayer.positions; i++) {
  // //         if(rosterPlayer.positions[i] == player.Position && rosterPlayer.player == null){
  // //           rosterPlayer
  // // } 
  // // } 
  // // }
  //     console.log(rosterPlayer)
  //     removePlayer(player)
  //   }
  function removePlayer(player) {

    top200.value = top200.value.filter(p => p != player)
  }
  return { roster, league, addPlayer, removePlayer }
})