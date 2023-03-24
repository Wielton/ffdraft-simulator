<script setup>
// import { useRosterStore } from "../stores/rosters";
import { useDraftStore } from "../stores/draft";
import { storeToRefs } from "pinia";

const { addPlayerUser } = useDraftStore();
const { isUserSelection } = storeToRefs(useDraftStore());
defineProps({
  players: Array,
});
</script>
<template>
  <v-table height="500px">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Position</th>
        <th class="text-left">Rank</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="player in players"
        :key="player.PlayerID"
        :player="player"
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
      >
        <td>{{ player.Name }}</td>
        <td>{{ player.Position }}</td>
        <td>{{ player.AverageDraftPosition }}</td>
        <td>
          <v-btn v-if="isUserSelection" :player="player" @click="addPlayerUser(player)"
            >ADD</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="css" scoped>
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
