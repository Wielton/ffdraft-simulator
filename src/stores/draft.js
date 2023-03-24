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
    // {
    //   name: "Team 5", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 6", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 7", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 8", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 9", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 10", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 11", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // },
    // {
    //   name: "Team 12", isAI: true, roster: [
    //     { name: "QB", position: "QB", player: null },
    //     { name: "WR1", position: "WR", player: null },
    //     { name: "WR2", position: "WR", player: null },
    //     { name: "RB1", position: "RB", player: null },
    //     { name: "RB2", position: "RB", player: null },
    //     { name: "TE", position: "TE", player: null },
    //     { name: "FLEX1", position: ["WR", "RB", "TE"], player: null },
    //     { name: "FLEX2", position: ["WR", "RB", "TE"], player: null }
    //   ], isDrafting: false
    // }
  ]);
  // The currentTeamIndex, isUserSelection, and isDraftFinished variables are used to keep track of the current team that is on the clock and whether the draft has finished, respectively.
  const currentTeamIndex = ref(0);
  const isUserSelection = ref(false);
  const isDraftFinished = ref(true);
  const draftList = ref(null)
  const currentTeam = ref(null)
  function startDraft() {
    draftList.value = top200.value
    console.log("Draft has started")
    // WHen the Start Draft button is selected, the managers roster {manager: value} is set 
    isDraftFinished.value = false;
    currentTeamIndex.value = 0;
    draft();
  }

  // The draft() function is called for each team during the draft process. If the current team is controlled by an AI, the draftAI() function is called. If the current team is controlled by a human user, the user is prompted to select a player to draft.
  function draft() {

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
  function addPlayerAI(rosterSpots) {
    console.log(rosterSpots)
    const topPlayers = getBestPlayersAvailable(draftList.value)
    console.log(topPlayers.value)
    const bestPlayer = ref(null)
    const qb = ref(null)
    const wr1 = ref(null)
    const wr2 = ref(null)
    const rb1 = ref(null)
    const rb2 = ref(null)
    const te = ref(null)
    const flex1 = ref(null)
    const flex2 = ref(null)

    // Handle QB
    qb.value = rosterSpots.find(p => p.name == "QB" && p.player == null)
    // Handle WR
    wr1.value = rosterSpots.find(p => p.name == "WR1" && p.player == null)
    wr2.value = rosterSpots.find(p => p.name == "WR2" && p.player == null)

    // Handle RB
    rb1.value = rosterSpots.find(p => p.name == "RB1" && p.player == null)
    rb2.value = rosterSpots.find(p => p.name == "RB2" && p.player == null)


    // Handle TE
    te.value = rosterSpots.find(p => p.name == "TE" && p.player == null)

    // Handle flex1 and flex2 positions
    flex1.value = rosterSpots.find(p => p.name == "FLEX1" && p.player == null)
    flex2.value = rosterSpots.find(p => p.name == "FLEX2" && p.player == null)
    console.log("All available positions: ", qb.value, wr1.value, wr2.value, rb1.value, rb2.value, te.value, flex1.value, flex2.value)

    // Get best player
    bestPlayer.value = topPlayers.value.reduce(
      (prev, current) => {
        return prev.AverageDraftPosition < current.AverageDraftPosition ? prev : current
      }
    );
    console.log("Best player: ", bestPlayer.value)
    if (bestPlayer.value.Position == "QB") {
      console.log("qb: ", qb.value)
      if (!qb.value) {
        if (wr2.value) {

          wr2.value.player = topPlayers.value.find(p => p.Position == "WR")
          removePlayer(wr2.value.player)
        } else if (rb2.value) {
          rb2.value.player = topPlayers.value.find(p => p.Position == "RB")
          removePlayer(rb2.value.player)
        } else if (te.value) {
          te.value.player = topPlayers.value.find(p => p.Position == "TE")
          removePlayer(te.value.player)
        }
      } else if (flex1.value || flex2.value) {
        if (flex1.value) {
          flex1.value.player = topPlayers.value.find(p => p.Position == "RB" || p.Position == "WR");
          removePlayer(flex1.value.player)
        } else {
          flex2.value.player = topPlayers.value.find(p => p.Position == "RB" || p.Position == "WR");
          removePlayer(flex2.value.player)
        }
      }
      qb.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    }
    
  
  else if (bestPlayer.value.Position == "TE") {
    console.log("qb: ", qb.value)
    if (!te.value) {
      if (wr2.value || rb2.value) {
        if (wr2.value) {
          wr2.value.player = topPlayers.value.find(p => p.Position == "WR")
          removePlayer(wr2.value.player)
        } else {
          rb2.value.player = topPlayers.value.find(p => p.Position == "RB")
          removePlayer(rb2.value.player)
        }
      } else if (flex1.value || flex2.value) {
        if (flex1.value) {
          flex1.value.player = topPlayers.value.find(p => p.Position == "RB" || p.Position == "WR");
          removePlayer(flex1.value.player)
        } else {
          flex2.value.player = topPlayers.value.find(p => p.Position == "RB" || p.Position == "WR");
          removePlayer(flex2.value.player)
        }
      }
    }
    te.value.player = bestPlayer.value
    removePlayer(bestPlayer.value)

  }
  else if (bestPlayer.value.Position == "WR") {
    console.log("WR: ", bestPlayer.value)
    if (wr1.value) {
      wr1.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    } else if (wr2.value) {
      wr2.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    } else if (rb1.value) {
      rb1.value.player = topPlayers.value.find(p => p.Position == "RB");
      removePlayer(rb1.value.player)
    } else if (rb2.value) {
      rb2.value.player = topPlayers.value.find(p => p.Position == "RB");
      removePlayer(rb2.value.player)
    } else if (flex1.value) {
      flex1.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    } else if (flex2.value) {
      flex2.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    }


  }
  else if (bestPlayer.value.Position == "RB") {
    if (rb1.value) {
      rb1.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
      console.log("Added RB1")
    } else if (rb2.value) {
      rb2.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
      console.log("Added RB2")
    } else if (wr1.value) {
      wr1.value.player = topPlayers.value.find(p => p.Position == "WR");
      removePlayer(wr1.value.player)
    } else if (flex1.value) {
      flex1.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    } else if (flex2.value) {
      flex2.value.player = bestPlayer.value
      removePlayer(bestPlayer.value)
    }
  }
  
  if (currentTeam.value.roster.every(p => p.player != null)) {
    addTeamToLeague(currentTeam, currentTeam.value.roster);
  }
  // // The problem I'm getting is that the team doesn't preserve the idx so when the order is reversed
  // // The idx[0] changes to idx[-1] therefore the players change
  // if (currentTeamIndex.value === teams.value.length - 1) {
  //   // teams.value.reverse();
  //   // currentTeamIndex.value = (currentTeamIndex.value - 1) % teams.value.length;
  // }
  currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length;
  // 
  console.log("Next team's turn...", currentTeamIndex.value)
  currentTeam.value.isDrafting = false
  
  topPlayers.value = null
  bestPlayer.value = null
  qb.value = null
  wr1.value = null
  wr2.value = null
  rb1.value = null
  rb2.value = null
  te.value = null
  flex1.value = null
  flex2.value = null
  draft();
}
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
    // console.log(player);
    // This function seems to always prioritize the "WR" position and will populate both WR and FLEX positions before adding a RB
    // Check the roster to see if a there's an open slot for the most needed position.  
    // This can be programmatically achieved by checking to see if a slot in a position is filled.  If it is then fill another slot ie. RB instead of the FLEX
    // Don't use the team index, use the team name or make an ID for each team to add it to that specific team.

    // If the team is AI, its already picked its player, so set the { team.roster.player } as { player }
    // if (currentTeam.value.isAI) {
    //   currentTeam.value.roster.position.player = player
    // } else {
    removePlayer(player)
    if (currentTeam.value.roster.every(p => p.player != null)) {
      addTeamToLeague(currentTeam, currentTeam.value.roster);
    }
    // The problem I'm getting is that the team doesn't preserve the idx so when the order is reversed
    // The idx[0] changes to idx[-1] therefore the players change
    if (currentTeamIndex.value === teams.value.length - 1) {
      // teams.value.reverse();
      // currentTeamIndex.value = (currentTeamIndex.value - 1) % teams.value.length;
    }
    currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length;
    // 
    console.log("Next team's turn...", currentTeamIndex.value)
    currentTeam.value.isDrafting = false
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
    const rosterSpots = roster.filter(p => !p.player);
    if (rosterSpots.length) {
      return rosterSpots
    }
  }

  // The endDraft() function sets isDraftFinished to true and logs a message to the console indicating that the draft has finished.
  function endDraft() {
    isDraftFinished.value = true;
    console.log("Draft is finished");
  }

  function removePlayer(player) {
    draftList.value = draftList.value.filter(p => p != player)
  }
  return { startDraft, endDraft, league, teams, addPlayerUser, isUserSelection, draftList, isDraftFinished, currentTeam }
})