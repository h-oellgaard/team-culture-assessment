<template>
    <div class="score-display">
      <h2>Team Culture Scores</h2>
      <canvas ref="scoreChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  // Registrer de nødvendige komponenter fra Chart.js
  Chart.register(...registerables);
  
  // Ref for canvas element
  const scoreChart = ref(null);
  let chartInstance = null;
  
  // Props for at modtage resultaterne
  const props = defineProps({
    results: {
      type: Object,
      required: true,
    },
  });
  
  // Funktion til at initialisere eller opdatere grafen
  const renderChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
    if (scoreChart.value) {
      const ctx = scoreChart.value.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Fiery Red', 'Sunshine Yellow', 'Earth Green', 'Cool Blue'],
          datasets: [{
            label: 'Team Culture Scores',
            data: Object.values(props.results),
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // Rød
            'rgba(255, 206, 86, 0.2)', // Gul
            'rgba(75, 192, 192, 0.2)', // Grøn
            'rgba(54, 162, 235, 0.2)'  // Blå
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)', // Rød
            'rgba(255, 206, 86, 1)', // Gul
            'rgba(75, 192, 192, 1)', // Grøn
            'rgba(54, 162, 235, 1)'  // Blå
          ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };
  
  onMounted(() => {
    renderChart();
  });
  
  // Watch for changes in props.results to re-render the chart
  watch(() => props.results, () => {
    renderChart();
  }, { deep: true });
  </script>
  
  <style scoped>
  .score-display {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }
  h2 {
    color: #333;
  }
  canvas {
    max-width: 100%;
    height: 400px;
  }
  </style>
  