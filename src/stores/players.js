import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const usePlayerStore = defineStore('players', () => {
  const players = ref(null)
  
  async function fetchRawPlayerData() {
    const apiKey = import.meta.env.VITE_API_KEY
    await axios.request({
        url: "https://api.sportsdata.io/v3/nfl/stats/json/FantasyPlayers?key="+apiKey,
        method: "GET",
}).then((response) => {
  console.log(response.data)
  this.players = response.data
}).catch((err) => {
  alert(err)
  console.log(err)
})
}
return { players, fetchRawPlayerData}
})
