import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore('alert', () => {
    const alert = ref(false)
    const msg = ref()

    return { alert, msg}
})