<script setup>
import { ref } from "vue";
import { useManagerStore } from "../stores/managers";

const { createTeam } = useManagerStore();
const welcomeIntro = ref({
  msg: "Welcome to the reDraft Fantasy Football Simulator...",
  isTyping: true,
});
const teamPrompt = ref({
  msg: "First, enter a team name: ",
  input: "",
  isTyping: true,
});
// const teamInput = ref({ isTyping: true });

// function toggleTyping(item) {
//   console.log(item.isTyping);
//   item.isTyping = !item.isTyping;
//   console.log(item.isTyping);
// }

// setTimeout(toggleTyping(teamPrompt), 4000);
// setTimeout(toggleTyping(teamInput), 6000);

// Create some kind of setTimeout() to control the rendering flow of elements and inputs.
// onMounted will trigger welcomeIntro.isTyping and teamPrompt.isTyping = true
// Once welcomeMsg is finished typing, welcomeIntro.isTyping = false
// This will then trigger the render for teamPrompt.msg
// Once the msg is fully rendered (after 2s), set teamPrompt.isTyping = false
// This will trigger the v-text-field to render
// onMounted(() => {
//   console.log(welcomeIntro.value.isTyping);
//   setTimeout(toggleTyping, 1000, welcomeIntro.value);
//   setTimeout(toggleTyping, 4000, teamPrompt.value);
//   setTimeout(toggleTyping, 5500, teamInput.value);
// });
</script>

<template>
  <v-container fluid class="pa-6 home-container">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1>
          {{ welcomeIntro.msg }}
        </h1>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <p>
          {{ teamPrompt.msg }}
        </p>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-form ref="form" @submit.prevent="createTeam(teamPrompt.input)">
          <v-text-field
            width="300"
            bgColor="white"
            v-model="teamPrompt.input"
          ></v-text-field
        ></v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.home-container {
  max-width: 800px;
}
.typed {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing;
  animation-duration: 2s;
  animation-timing-function: steps(30, end);
  animation-fill-mode: forwards;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>
