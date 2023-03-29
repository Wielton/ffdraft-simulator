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
const { teams, draftList, isDraftFinished, draftSelectionTimer } = storeToRefs(
  useDraftStore()
);

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
      </v-col> </v-row
    ><v-row v-if="!isDraftFinished" align="start" justify="center" class="router-row">
      <v-col cols="3" height="500">
        <v-list height="500"
          ><v-list-item v-for="(team, idx) in teams" :key="idx"
            ><v-card
              ><v-card-title :class="team.isDrafting ? 'green' : 'white'">{{
                team.name
              }}</v-card-title
              ><v-card-text>
                <p v-for="(position, idx) in team.roster" :key="idx">
                  {{ position.name }} :
                  <span v-if="position.player">{{ position.player.Name }}</span>
                </p>
              </v-card-text></v-card
            ></v-list-item
          ></v-list
        >
      </v-col>
      <v-col cols="3">
        <v-card height="500"
          ><v-card-title>Player Card</v-card-title
          ><v-card-text>
            <h1>{{ draftSelectionTimer }}</h1>
            <p>
              Here will display a draft board with countdown timer and the next best
              player
            </p>
          </v-card-text></v-card
        >
      </v-col>
      <v-col cols="6" class="h-100">
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
