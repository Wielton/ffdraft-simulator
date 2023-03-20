<script setup>
import { storeToRefs } from "pinia";
import { useRosterStore } from "../stores/rosters.js";
const { roster } = storeToRefs(useRosterStore());
</script>
<template>
  <v-list>
    <v-list-item v-for="(position, idx) in roster.positions" :key="idx"
      >{{ position.name }}
      <p v-if="position.player != null">{{ position.player.Name }}</p>
    </v-list-item>
  </v-list>
</template>
