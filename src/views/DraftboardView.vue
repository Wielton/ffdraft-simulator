<script setup>
// import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { usePlayerDataStore } from "./stores/playerData";
// import PlayerCard from "./components/playerCard.vue";
// const { posSortedPlayers } = storeToRefs(usePlayerDataStore);
const { top200, getPlayersByPosition } = usePlayerDataStore();
const positions = ref([
  { id: 1, name: "QB" },
  { id: 2, name: "RB" },
  { id: 3, name: "WR" },
  { id: 4, name: "TE" },
]);
onMounted(() => {
  console.log(top200);
});
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-tabs
          ><v-tab
            v-for="position in positions"
            :key="position.id"
            :position="position.value"
            @click="getPlayersByPosition(position.name)"
            >{{ position.name }}</v-tab
          ></v-tabs
        ><v-list height="500px">
          <v-list-item
            v-for="(player, idx) in top200"
            :key="player.PlayerID"
            :player="player"
            one-line
            class="pa-4 ma-2"
            :class="
              player.Position == 'QB'
                ? 'qb-color'
                : player.Position == 'RB'
                ? 'rb-color'
                : player.Position == 'WR'
                ? 'wr-color'
                : 'te-color'
            "
            ><v-list-item-title
              >{{ idx + 1 }} | {{ player.Position }} | {{ player.Name }}
            </v-list-item-title>
            <v-divider />
            <v-list-item-text>
              <P> {{ player.Team }} BYE: {{ player.ByeWeek }} </P>
            </v-list-item-text>
          </v-list-item></v-list
        >
      </v-col>
      <v-col cols="12">
        <p>Current drafting team goes here...</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.qb-color {
  background-color: rgba(85, 124, 231, 0.7);
}
.rb-color {
  background-color: rgba(231, 182, 85, 0.7);
}
.wr-color {
  background-color: rgba(112, 245, 130, 0.7);
}
.te-color {
  background-color: rgba(246, 103, 132, 0.7);
}
</style>
