<script setup>
import { ref, onMounted } from "vue";
import { useManagerStore } from "../stores/managers";

const { createTeam } = useManagerStore();
const welcomeIntro = ref({
  msg: "Welcome to the reDraft Fantasy Football Simulator...",
  isTyping: false,
});
const teamPrompt = ref({
  msg: "First, enter a team name: ",
  input: "",
  isTyping: false,
});
const teamInput = ref({ isTyping: false });

function toggleTyping(item) {
  console.log(item.isTyping);
  item.isTyping = !item.isTyping;
  console.log(item.isTyping);
}

// setTimeout(toggleTyping(teamPrompt), 4000);
// setTimeout(toggleTyping(teamInput), 6000);

// Create some kind of setTimeout() to control the rendering flow of elements and inputs.
// onMounted will trigger welcomeIntro.isTyping and teamPrompt.isTyping = true
// Once welcomeMsg is finished typing, welcomeIntro.isTyping = false
// This will then trigger the render for teamPrompt.msg
// Once the msg is fully rendered (after 2s), set teamPrompt.isTyping = false
// This will trigger the v-text-field to render
onMounted(() => {
  console.log(welcomeIntro.value.isTyping);
  setTimeout(toggleTyping, 1000, welcomeIntro.value);
  setTimeout(toggleTyping, 4000, teamPrompt.value);
  setTimeout(toggleTyping, 5500, teamInput.value);
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1 v-if="welcomeIntro.isTyping" class="typed">
          {{ welcomeIntro.msg }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p v-if="teamPrompt.isTyping" class="typed">
          {{ teamPrompt.msg }}
        </p>
      </v-col>
    </v-row>
    <v-row
      ><v-col cols="4">
        <v-form ref="form" @submit.prevent="createTeam(teamPrompt.input)">
          <v-text-field
            bgColor="white"
            v-if="teamInput.isTyping"
            v-model="teamPrompt.input"
          ></v-text-field
        ></v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
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
