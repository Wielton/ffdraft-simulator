import { defineStore } from "pinia";
import { ref } from 'vue';
import cookies from "vue-cookies";
import router from "../router/index";
import { v4 as uuidv4 } from 'uuid';

// For this implementation, a user will create his/her/their team.
// The rest of the teams will be CPU
// 

export const useManagerStore = defineStore('manager', () => {
  const manager = ref({id: null, teamName: null})
  const managerId = uuidv4()
  const leagueManagers = ref([])
  function createTeam(managerTeamName) {
    manager.value.teamName = managerTeamName
    manager.value.id = managerId
    cookies.set("user", manager.value)
    router.push({name: 'league', params: {managerTeamName: manager.value.teamName}})
  }
  function getManagerAuth() {
    const managerData = cookies.get("user")
    if(!managerData){ 
      router.push({name: 'home'})
    }
    manager.value = managerData
    
}

  return { manager, leagueManagers, createTeam, getManagerAuth }
})