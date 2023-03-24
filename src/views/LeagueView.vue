<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import DraftList from "../components/DraftList.vue";
import TeamRoster from "../components/TeamRoster.vue";
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
const { teams, draftList, isDraftFinished } = storeToRefs(useDraftStore());

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
      <v-col cols="12">
        <h1>Welcome {{ manager.teamName }}</h1>

        <v-spacer></v-spacer>
        <v-btn @click="startDraft">Start Draft</v-btn>
      </v-col>
      <v-col cols="12" v-if="!isDraftFinished">
        <v-row>
          <v-col cols="3" v-for="(team, idx) in teams" :key="idx"
            ><v-card
              ><v-card-title :class="team.isDrafting ? 'green' : 'white'">{{
                team.name
              }}</v-card-title
              ><v-card-text
                ><p v-for="(position, idx) in team.roster" :key="idx">
                  {{ position.name }} :
                  <span v-if="position.player">{{ position.player.Name }}</span>
                </p></v-card-text
              ></v-card
            ></v-col
          ></v-row
        >
      </v-col>
    </v-row>
    <!-- <v-row align="center" justify="center">
            <v-tabs grow>
              <v-tab>Roster</v-tab>
              <v-tab>Draft</v-tab>
              <v-tab>Teams</v-tab>
            </v-tabs></v-row
          > -->

    <v-row align="start" justify="center" class="router-row">
      <v-col cols="12" sm="6" md="4" lg="4">
        <TeamRoster />
      </v-col>
      <v-col v-if="!isDraftFinished" cols="12" sm="6" md="6" lg="6">
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
