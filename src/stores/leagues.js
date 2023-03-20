import { ref } from 'vue'
import { defineStore } from "pinia";

export const useLeagueStore = defineStore(() => {
  const league = ref([])

  return { league }
})