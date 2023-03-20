import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import cookies from 'vue-cookies'
import { usePlayerDataStore } from './playerData'
// This code defines a draft simulation system for a fantasy football league. It uses Vue 3's reactivity system to maintain the state of the draft.




export const useDraftStore = defineStore('draft', () => {
  const { top200 } = storeToRefs(usePlayerDataStore())
  const manager  = cookies.get("user")

  // The roster variable is a reactive object that represents the list of players that each team can draft. It includes a manager property which is a reactive reference to the manager of the team, and an array of positions objects which represent the different positions on a football team (e.g. quarterback, wide receiver, etc.). Each position object has a name, a position property that specifies the position type (e.g. QB, WR, RB, etc.), and a player property that initially has a value of null, indicating that no player has been drafted for that position.
  const roster = ref({
    positions: [
      { name: "QB", position: "QB", player: null },
      { name: "WR1", position: "WR", player: null },
      { name: "WR2", position: "WR", player: null },
      { name: "RB1", position: "RB", player: null },
      { name: "RB2", position: "RB", player: null },
      { name: "TE", position: "TE", player: null },
      { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
      { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    ]
  });

  // The league variable is an empty array that will eventually hold the drafted players.
  const league = ref([]);

  // The teams variable is an array of objects that represent the different teams in the league. Each team object has a name property and an isAI property that specifies whether the team is controlled by an artificial intelligence (AI) or a human user.
  const teams = ref([
    { name: `${manager.teamName}`, isAI: false, roster: roster.value.positions, isDrafting: false },
    { name: "Team 2", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 3", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 4", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 5", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 6", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 7", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 8", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 9", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 10", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 11", isAI: true, roster: roster.value.positions, isDrafting: false },
    { name: "Team 12", isAI: true, roster: roster.value.positions, isDrafting: false }
  ]);

  // The currentTeamIndex, isUserSelection, and isDraftFinished variables are used to keep track of the current team that is on the clock and whether the draft has finished, respectively.
  const currentTeamIndex = ref(0);
  const isUserSelection = ref(false);
  const isDraftFinished = ref(true);

  function startDraft() {
    console.log("Draft has started")
    // WHen the Start Draft button is selected, the managers roster {manager: value} is set
    console.log(teams.value)
    // isDraftFinished.value = false;
    // currentTeamIndex.value = 0;
    draft();
  }

  // The draft() function is called for each team during the draft process. If the current team is controlled by an AI, the draftAI() function is called. If the current team is controlled by a human user, the user is prompted to select a player to draft.
  function draft() {
    const currentTeam = teams.value[currentTeamIndex.value];

    currentTeam.isDrafting = true
    console.log(currentTeam)
    if (currentTeam.isAI) {
      console.log("AI is up...")
        // Prompt user to select player here
      // For now the draft will end at the 12th team until I flip the teams array around after each round to make it a snakeDraft
      // const availableRosterSpots = getAvailableRosterSpots(currentTeam);
      
      draftAI(currentTeam.roster)
      currentTeam.isDrafting = false
      // draftAI(currentTeam);
    } else {
      console.log("User is up...")
      setTimeout(() => {
        // Prompt user to select player here
      // For now the draft will end at the 12th team until I flip the teams array around after each round to make it a snakeDraft
      // const availableRosterSpots = getAvailableRosterSpots(currentTeam);

        isUserSelection.value = true
      }, 30000);
    }
    
  }

  // The draftAI() function simulates an AI-controlled team's drafting behavior. It first checks if there are any available players to draft by calling the getAvailablePlayers() function. If there are no available players, the endDraft() function is called to end the draft. If there are available players, the AI randomly selects one of them to draft by calling the addPlayer() function. The currentTeamIndex variable is then incremented to move on to the next team, and the draft() function is called again.
  function draftAI(team) {
    setTimeout(() => {

      const availableRosterSpots = getAvailableRosterSpots(team);
      if (availableRosterSpots.length === 0) {
        endDraft();
        return;
      }
      console.log(availableRosterSpots)
      return
      // addPlayer(playerToDraft);

      // currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length;
      // draft();
    }, 5000);
  }
  function addPlayer(player) {
    const team = teams.value[currentTeamIndex.value];
    const rosterPlayer = roster.value.positions.find(p => p.position === player.Position && p.player === null);
    const flex1 = roster.value.positions.find(p => p.name === "FLEX1" && p.position.includes(player.Position) && !p.player);
    const flex2 = roster.value.positions.find(p => p.name === "FLEX2" && p.position.includes(player.Position) && !p.player);

    if (rosterPlayer) {
      rosterPlayer.player = player;
    } else if (flex1) {
      flex1.player = player;
    } else if (flex2) {
      flex2.player = player;
    }
    if(isUserSelection.value){
      isUserSelection.value = false;
    }
    removePlayer(player)
    if (roster.value.positions.every(p => p.player !== null)) {
      
      addTeamToLeague(team, roster.value);
    }
    team.isDrafting = false
    currentTeamIndex.value += 1;
    console.log("Next team's turn...")
    draft();
  
  }

  function addTeamToLeague(teamName, roster) {
    league.value.push({
      name: teamName,
      roster: roster
    });
  }

  // The getAvailablePlayers() function returns an array of players that are available to be drafted. It does this by filtering a list of all players to find those that can fill a position that has not yet been filled on the team's roster. The find() function is used to find the first position object in the roster variable's positions array that matches the player's position and has a player value of null. The flex1 and flex2 variables are also used to check if the player can fill one of the two flex positions, which can be filled by players of multiple positions.
  function getAvailableRosterSpots(roster) {
    const players = [
      { Name: "Player1", Position: "QB" },
      { Name: "Player2", Position: "WR" },
      { Name: "Player3", Position: "RB" },
      { Name: "Player4", Position: "TE" }
    ];

    return players.filter(player => {
      const rosterPlayer = roster.filter(p => p.position === player.Position && p.player === null);
      const flex1 = roster.filter(p => p.name === "FLEX1" && p.position.includes(player.Position) && !p.player);
      const flex2 = roster.filter(p => p.name === "FLEX2" && p.position.includes(player.Position) && !p.player);
      return rosterPlayer || flex1 || flex2;
    });
  }

  // The endDraft() function sets isDraftFinished to true and logs a message to the console indicating that the draft has finished.
  function endDraft() {
    isDraftFinished.value = true;
    console.log("Draft is finished");
  }
  function removePlayer(player) {

    top200.value = top200.value.filter(p => p != player)
  }
  return { startDraft, endDraft, roster, league, teams, addPlayer, isUserSelection }
})