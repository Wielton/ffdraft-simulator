import { defineStore } from "pinia";
import { ref } from 'vue';
import cookies from "vue-cookies";
import router from "../router/index";
import { v4 as uuidv4 } from 'uuid';

// For this implementation, a user will create his/her/their team.
// The rest of the teams will be CPU
// 

export const useManagerStore = defineStore('manager', () => {
  const manager = ref({id: Number, teamName: String})
  const managerId = uuidv4()
  const leagueManagers = ref([])
  function createTeam(managerTeamName) {
    this.manager.teamName = managerTeamName
    this.manager.id = managerId
    cookies.set("user", this.manager)
    router.push({name: 'league', params: {managerTeamName: managerTeamName}})
    console.log(cookies.get("user"))
  }
  async function getManagerAuth() {
    const managerData = await cookies.get("user")
    console.log(managerData)
    if(managerData){
      this.manager = managerData
    }
}

  return { manager, leagueManagers, createTeam, getManagerAuth }
})