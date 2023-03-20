<script setup>
defineProps({
  name: String,
});
</script>
<template>
  <v-card>
    <v-card-title
      ><p>{{ name }}</p></v-card-title
    >
  </v-card>
</template>
