import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTimerStore = defineStore('timers', () => {
  const waitingRoomTimer = ref(
    {
      countDown: 90
    })
  
  function draftSelectionCountdown() {
    
    
}
  return { waitingRoomTimer, draftSelectionCountdown }
})