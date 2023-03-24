import { defineStore, storeToRefs } from "pinia";
import { usePlayerDataStore } from './playerData'


export const useAIdraftStore = defineStore("AIdraft", () => {
  const { top200 } = storeToRefs(usePlayerDataStore())
  function addPlayerAI(rosterSpots) {
    const draftList = top200.value
    const availablePlayers = draftList.value
    console.log(rosterSpots, availablePlayers)
    
  }
  
  return { addPlayerAI }
})