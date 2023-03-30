<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import DraftList from "../components/DraftList.vue";
import { useManagerStore } from "../stores/managers";
import { usePlayerDataStore } from "../stores/playerData";
import { useDraftStore } from "../stores/draft";

// Manager Store
const { getManagerAuth } = useManagerStore();
const { manager } = storeToRefs(useManagerStore());

// Player Data Store
const { getTop200, getSkillPlayers } = usePlayerDataStore();

// Draft Store
const { startDraft } = useDraftStore();
const {
  teams,
  prevTeam,
  draftList,
  isDraftFinished,
  draftSelectionTimer,
  isUserSelection,
  lastPlayerAdded,
} = storeToRefs(useDraftStore());

onMounted(() => {
  getManagerAuth();
  getSkillPlayers();
  getTop200();
  console.log(isDraftFinished.value);
});
</script>
<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex">
        <v-spacer />
        <div class="text-weight-medium text-center text-h4 text-sm-h3">
          Welcome, {{ manager.teamName }}!
        </div>
        <v-spacer />
        <v-btn v-if="isDraftFinished" @click="startDraft" class="text-center"
          >Start Draft</v-btn
        ><v-spacer />
      </v-col>
    </v-row>
    <!-- <v-row align="center" justify="center" v-if="isDraftFinished">
        <v-col cols="12" class="text-center">
          <v-sheet>
            After you click the "START DRAFT" button above, the draft board will appear.
          </v-sheet>
        </v-col>
          <v-col cols="4">
            <v-sheet height="400">
              This column shows all teams in the league with their rosters. It will also
              follow each pick, highlight the current team on the clock, and inject the chosen
              player.
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet height="400"> This column contains the draft clock. </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet height="400">
              This column contains the draft list of all available players.
            </v-sheet>
          </v-col>
        </v-row> -->
    <v-row v-if="prevTeam">{{ prevTeam.name }} drafted: {{ lastPlayerAdded.Name }}</v-row>
    <v-row v-if="!isDraftFinished" align="start" justify="center" class="router-row">
      <v-col cols="6"
        ><v-window :continuous="true" class="fill-height">
          <v-window-item
            v-for="(team, idx) in teams"
            :key="idx"
            :value="team.isDrafting"
            :isSelected="team.isDrafting"
          >
            <v-card-title :class="team.isDrafting ? 'green' : 'white'">{{
              team.name
            }}</v-card-title>
            <v-card-text>
              <p v-for="(position, idx) in team.roster" :key="idx">
                {{ position.name }} :
                <span v-if="position.player">{{ position.player.Name }}</span>
              </p>
            </v-card-text>
          </v-window-item>
        </v-window>
      </v-col>
      <v-col cols="6">
        <v-sheet elevation="12" rounded="lg" width="100%" class="">
          <div
            class="text-weight-black text-center text-h5 text-sm-h3 text-grey-darken-1"
          >
            DRAFT CLOCK
          </div>
          <v-col cols="12">
            <v-sheet
              color="grey-darken-1"
              rounded="lg"
              class="d-flex justify-center align-center"
              height="100"
            >
              <div
                class="text-weight-black text-h2 text-sm-h1 text-md-h1 text-lg-h1 text-center"
                border
                rounded
                :class="
                  !isUserSelection || isDraftFinished
                    ? 'text-grey-lighten-3'
                    : draftSelectionTimer >= 8
                    ? 'text-green-lighten-2'
                    : draftSelectionTimer >= 4 && draftSelectionTimer <= 7
                    ? 'text-yellow-lighten-2'
                    : 'text-red-lighten-2'
                "
              >
                {{ draftSelectionTimer }}
              </div>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-if="!isDraftFinished" align="center" justify="center">
      <v-col cols="12" sm="10" md="4" lg="4" class="h-100">
        <DraftList :players="draftList" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.green {
  background-color: rgba(148, 208, 132, 0.512);
}

.white {
  background-color: whitesmoke;
}
</style>
