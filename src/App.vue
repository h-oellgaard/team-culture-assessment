<template>
  <div id="app" style="background-color: whitesmoke; color: black">
    <h1>Team Culture Assessment</h1>
    <GroupJoins @group-selected="groupSelected"  />
    <SelectedGroup v-if="currentGroup" :group="currentGroup"  />
    <Questions  @update-questions="updateQuestions" />
    <button @click="calculateResults">Submit</button>
    <ScoreDisplay v-if="results" :results="results" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Questions from './components/Questions.vue';
import ScoreDisplay from './components/ScoreDisplay.vue';
import GroupJoins from './components/GroupJoins.vue';
import SelectedGroup from './components/SelectedGroup.vue';
import calculateScores from './services/calculate_scores.service.js'; // Denne import er nu opdateret og korrekt

// Reaktive variabler til at gemme spørgsmål, resultater og gruppeinfo
const questions = ref([]);
const results = ref(null);
const currentGroup = ref(null);

// Funktion til at beregne scoren
const calculateResults = () => {
  results.value = calculateScores(questions.value);
};

// Funktion til at opdatere spørgsmål fra Questions.vue
const updateQuestions = (newQuestions) => {
  questions.value = newQuestions;
};

// Funktion til at håndtere valg af gruppe
const groupSelected = (group) => {
  currentGroup.value = group;
  results.value = null; // Nulstil resultater, når en ny gruppe vælges
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
h1 {
  color: #333;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
