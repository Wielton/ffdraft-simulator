<script setup></script>
<template>
  <v-alert
    v-model="alert"
    :color="color"
    :icon="icon"
    :title="title"
    dismissible
    transition="fade-transition"
  ></v-alert>
</template>
