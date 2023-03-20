<script setup>
import { storeToRefs } from "pinia";
import { useDraftStore } from "../stores/draft.js";
const { teams } = storeToRefs(useDraftStore());
</script>
<template>
  <v-list>
    <v-list-item v-for="(position, idx) in teams[0].roster" :key="idx"
      >{{ position.name }}
      <span v-if="position.player != null">{{ position.player.Name }}</span>
    </v-list-item>
  </v-list>
</template>
