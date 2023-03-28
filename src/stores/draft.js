import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import cookies from 'vue-cookies'
import { usePlayerDataStore } from './playerData'
// This code defines a draft simulation system for a fantasy football league. It uses Vue 3's reactivity system to maintain the state of the draft.




export const useDraftStore = defineStore('draft', () => {
  const { top200 } = storeToRefs(usePlayerDataStore())
  const manager = cookies.get("user")

  // The roster variable is a reactive object that represents the list of players that each team can draft. 
  // It includes a manager property which is a reactive reference to the manager of the team


  // The league variable is an empty array that will eventually hold the drafted players.
  const league = ref([]);

  // The teams variable is an array of objects that represent the different teams in the league. 
  // Each team object has a name property and an isAI property that specifies whether the team 
  // is controlled by an artificial intelligence (AI) or a human user.
  // There's also an array of positions objects which represent the different positions on a football team (e.g. quarterback, wide receiver, etc.).
  // Each position object has a name, a position property that specifies the position type (e.g. QB, WR, RB, etc.), and a player property that initially has a value of null, indicating that no player has been drafted for that position.
  const teams = ref([
    {
      name: `${manager.teamName}`, isAI: false, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 2", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 3", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 4", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 5", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 6", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 7", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 8", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 9", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 10", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 11", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    },
    {
      name: "Team 12", isAI: true, roster: [
        { name: "QB", position: "QB", player: null },
        { name: "WR1", position: "WR", player: null },
        { name: "WR2", position: "WR", player: null },
        { name: "RB1", position: "RB", player: null },
        { name: "RB2", position: "RB", player: null },
        { name: "TE", position: "TE", player: null },
        { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
        { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
      ], isDrafting: false
    }
  ]);
  // The currentTeamIndex, isUserSelection, and isDraftFinished variables are used to keep track of the current team that is on the clock and whether the draft has finished, respectively.
  const currentTeamIndex = ref(0);
  const isUserSelection = ref(false);
  const isDraftFinished = ref(true);
  const draftList = ref(null)
  const currentTeam = ref(null)

// --------------------------------------------------------------------------------------------------------

  function startDraft() {
    draftList.value = top200.value
    console.log("Draft has started")
    // WHen the Start Draft button is selected, the managers roster {manager: value} is set 
    isDraftFinished.value = false;
    currentTeamIndex.value = 0;
    draft();
  }


// --------------------------------------------------------------------------------------------------------

  // The draft() function is called for each team during the draft process. If the current team is controlled by an AI, the draftAI() function is called. If the current team is controlled by a human user, the user is prompted to select a player to draft.
  function draft() {
    // if(teams.value.every(p => p.roster.every(pos => !pos.player))){
    //     endDraft();
    //   }
    currentTeam.value = teams.value[currentTeamIndex.value];
    currentTeam.value.isDrafting = true
    if (currentTeam.value.isAI) {
      console.log("AI is up...")
      // Prompt user to select player here
      // For now the draft will end at the 12th team until I flip the teams array around after each round to make it a snakeDraft
      // const availableRosterSpots = getAvailableRosterSpots(currentTeam);

      draftAI(currentTeam)

      // draftAI(currentTeam);
    } else {
      console.log("User is up...")
      isUserSelection.value = true
      // setTimeout(() => {
      //   // Prompt user to select player here
      //   // For now the draft will end at the 12th team until I flip the teams array around after each round to make it a snakeDraft
      //   // const availableRosterSpots = getAvailableRosterSpots(currentTeam);


      // }, 30000);
    }

  }

// --------------------------------------------------------------------------------------------------------

  // The draftAI() function simulates an AI-controlled team's drafting behavior. It first checks if there are any available players to draft by calling the getAvailablePlayers() function. If there are no available players, the endDraft() function is called to end the draft. If there are available players, the AI randomly selects one of them to draft by calling the addPlayer() function. The currentTeamIndex variable is then incremented to move on to the next team, and the draft() function is called again.
  function draftAI(team) {
    setTimeout(() => {
      const availableRosterSpots = getAvailableRosterSpots(team.value.roster);
      if (!availableRosterSpots) {
        endDraft();
        return;
      }
      addPlayerAI(availableRosterSpots)

    }, 500);
  }

// --------------------------------------------------------------------------------------------------------

  function getBestPlayersAvailable(players) {
    const bestPlayers = ref([])
    const topQB = ref(null)
    const topWR = ref(null)
    const topRB = ref(null)
    const topTE = ref(null)
    bestPlayers.value.push(topQB.value = players.find(p => p.Position == "QB"))
    bestPlayers.value.push(topWR.value = players.find(p => p.Position == "WR"))
    bestPlayers.value.push(topRB.value = players.find(p => p.Position == "RB"))
    bestPlayers.value.push(topTE.value = players.find(p => p.Position == "TE"))
    return bestPlayers
  }

// --------------------------------------------------------------------------------------------------------

  function addPlayerAI(rosterSpots) {
    const topPlayers = getBestPlayersAvailable(draftList.value)
    const bestPlayer = ref(null)
    // Get best player
    bestPlayer.value = topPlayers.value.reduce(
      (prev, current) => {
        return prev.AverageDraftPositionPPR < current.AverageDraftPositionPPR ? prev : current
      }
    );

    // Check to see if the best player available matches any core roster spots by matching position
    // Position can be QB, WR, RB, or TE
    if (rosterSpots.find(p => p.position == bestPlayer.value.Position)) {
      // Set that roster position to be that best player and removePlayer()
      // Get the best roster spot according to the best player available
      const bestSpot = ref(null)
      bestSpot.value = rosterSpots.find(p => p.position == bestPlayer.value.Position)
      bestSpot.value.player = bestPlayer.value
      console.log("Best spot added: ", bestPlayer.value)
      removePlayer(bestPlayer.value)
    }
    // If no match, then check flex positions for WR or RB:
    else if (rosterSpots.find(p => p.name.includes("FLEX")) && (bestPlayer.value.Position == "WR" || bestPlayer.value.Position == "RB")) {

      console.log("Flex spot added... ")
      const bestFlexSpot = ref(null)
      bestFlexSpot.value = rosterSpots.find(p => p.name.includes("FLEX"))
      bestFlexSpot.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)

    // If no match, check the QB spot: 
    } else if (rosterSpots.find(p => p.position == "QB")) {
      console.log("QB added...")
      const qbSpot = ref(null)
      qbSpot.value = rosterSpots.find(p => p.position == "QB")
      qbSpot.value.player = topPlayers.value.find(p => p.Position == "QB")
      removePlayer(qbSpot.value.player)
    
    // If no match, check the TE spot
    } else if (rosterSpots.find(p => p.position == "TE")) {
      console.log("TE added...")
      const teSpot = ref(null)
      teSpot.value = rosterSpots.find(p => p.position == "TE")
      teSpot.value.player = topPlayers.value.find(p => p.Position == "TE")
      removePlayer(teSpot.value.player)
    }

    // If no match, find the next available roster spot,
    // Then find a matching player from the topPlayers array
    else {
      console.log("Getting auxiliary roster spot...")
      const auxSpot = ref(null)
      auxSpot.value = rosterSpots.find(p => p.position)
      if(auxSpot.value.name.includes("WR") || auxSpot.value.name.includes("RB") || auxSpot.value.name.includes("FLEX")) {
        auxSpot.value.player = topPlayers.value.reduce(
          (prev, current) => {
            return (prev.AverageDraftPositionPPR < current.AverageDraftPositionPPR) && (prev.Position != "QB" && prev.Position != "TE") ? prev : current
            });
        // console.log(topPlayers.value.reduce(
        //   (prev, current) => {
        //     return (prev.AverageDraftPositionPPR < current.AverageDraftPositionPPR) && (prev.Position != "QB" && prev.Position != "TE") ? prev : current
        //     }))
        removePlayer(auxSpot.value.player)
      }
}

    console.log("Current Roster: ", currentTeam.value.roster)
    if (currentTeam.value.roster.every(p => p.player != null)) {
      addTeamToLeague(currentTeam, currentTeam.value.roster);
    }
    currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length;
    console.log("Next team's turn...", currentTeamIndex.value)
    currentTeam.value.isDrafting = false
    draft();
  }

// --------------------------------------------------------------------------------------------------------

  function addPlayerUser(player) {
    if (currentTeam.value.isAI) {
      const rosterSpot = currentTeam.value.roster.find(p => p.name.includes(player.Position) && !p.player)
      console.log(rosterSpot)
      rosterSpot.player = player
    } else {
      const rosterPlayer = currentTeam.value.roster.find(p => p.position == player.Position && p.player == null);
      const flex1 = currentTeam.value.roster.find(p => p.name == "FLEX1" && p.position.includes(player.Position) && p.player == null);
      const flex2 = currentTeam.value.roster.find(p => p.name == "FLEX2" && p.position.includes(player.Position) && p.player == null);

      if (rosterPlayer) {
        rosterPlayer.player = player;
      }
      else if (flex1) {
        flex1.player = player;
      }
      else if (flex2) {
        flex2.player = player;
      }
      isUserSelection.value = false;
    }
    removePlayer(player)
    if (currentTeam.value.roster.every(p => p.player != null)) {
      addTeamToLeague(currentTeam, currentTeam.value.roster);
    }
    currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length;
    console.log("Next team's turn...", currentTeamIndex.value)
    currentTeam.value.isDrafting = false
    draft();

  }


// --------------------------------------------------------------------------------------------------------

  function addTeamToLeague(teamName, roster) {
    league.value.push({
      name: teamName,
      roster: roster
    });
    console.log(league.value)
  }


// --------------------------------------------------------------------------------------------------------

  // The getAvailablePlayers() function returns an array of players that are available to be drafted. It does this by filtering a list of all players to find those that can fill a position that has not yet been filled on the team's roster. The find() function is used to find the first position object in the roster variable's positions array that matches the player's position and has a player value of null. The flex1 and flex2 variables are also used to check if the player can fill one of the two flex positions, which can be filled by players of multiple positions.
  function getAvailableRosterSpots(roster) {
    const rosterSpots = roster.filter(p => !p.player);
    if (rosterSpots.length) {
      return rosterSpots
    }
  }


// --------------------------------------------------------------------------------------------------------

  // The endDraft() function sets isDraftFinished to true and logs a message to the console indicating that the draft has finished.
  function endDraft() {
    isDraftFinished.value = true;
    console.log("Draft is finished");
  }


// --------------------------------------------------------------------------------------------------------

  function removePlayer(player) {
    draftList.value = draftList.value.filter(p => p != player)
  }
  return { startDraft, endDraft, league, teams, addPlayerUser, isUserSelection, draftList, isDraftFinished, currentTeam }
})