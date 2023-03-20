<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import DraftList from "../components/DraftList.vue";
import TeamRoster from "../components/TeamRoster.vue";
import { useManagerStore } from "../stores/managers";
import { usePlayerDataStore } from "../stores/playerData";

const { getManagerAuth } = useManagerStore();
const { manager } = storeToRefs(useManagerStore());
const { getTop200, getSkillPlayers } = usePlayerDataStore();
const { top200 } = storeToRefs(usePlayerDataStore());

onMounted(async () => {
  // await fetchRawPlayerData();
  await getManagerAuth();
  getSkillPlayers();
  getTop200();
  console.log(top200.value);
});
</script>
<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <h1>Welcome {{ manager.teamName }}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-tabs grow>
        <v-tab>Roster</v-tab>
        <v-tab>Draft</v-tab>
        <v-tab>Teams</v-tab>
      </v-tabs></v-row
    >
    <v-row align="start" justify="center" class="router-row">
      <v-col cols="12" sm="6" md="4" lg="4">
        <TeamRoster />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <DraftList :players="top200" />
      </v-col>
    </v-row>
  </v-container>
</template>
<style></style>
