  <template>
    <div id="app">
      <img src="./assets/logo.svg" alt="Logo" style="width:  300px; margin-bottom: 20px;" />
      <h1>Team Culture Assessment</h1>
      <Questions @update-questions="updateQuestions" />
      <button @click="calculateResults">Submit</button>
      <ScoreDisplay v-if="results" :results="results" />
      <div v-if="showCookiePopup" class="cookie-popup">
        <p>We use cookies to see whether you accept cookies. By clicking accept, you agree to our use of cookies.
        </p>
        <p>The only cookie we use is whether you accept cookies or not. If you decline cookies you'll see this again.</p>
        <button @click="acceptCookies" style="margin: 2%;">Accept</button>
        <button @click="showCookiePopup = false" style="margin: 2%;">Decline</button>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import Questions from './components/Questions.vue';
  import ScoreDisplay from './components/ScoreDisplay.vue';
  import calculateScores from './services/calculate_scores.js';

  // Reaktive variabler til at gemme spørgsmål og resultater
  const questions = ref([]);
  const results = ref(null);
  const showCookiePopup = ref(false);

  // Funktion til at beregne scoren
  const calculateResults = () => {
    results.value = calculateScores(questions.value);
  };

  // Funktion til at opdatere spørgsmål fra Questions.vue
  const updateQuestions = (newQuestions) => {
    questions.value = newQuestions;
  };

  // Funktion til at acceptere cookies
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    showCookiePopup.value = false;
  };

  onMounted(() => {
    // Check if cookies have been accepted
    if (!localStorage.getItem('cookiesAccepted')) {
      showCookiePopup.value = true;
    }
  });
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
  .cookie-popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: 15px;
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .cookie-popup button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .cookie-popup button:hover {
    background-color: #0056b3;
  }
  </style>
