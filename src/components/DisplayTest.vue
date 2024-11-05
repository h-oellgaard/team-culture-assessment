<template>
    <div class="test-display">
      <h2>Test Component with Chart</h2>
      <canvas ref="testChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  // Registrer de nødvendige komponenter i Chart.js
  Chart.register(...registerables);
  
  // Ref for canvas element
  const testChart = ref(null);
  
  onMounted(() => {
    if (testChart.value) {
      const ctx = testChart.value.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Category A', 'Category B', 'Category C', 'Category D'],
          datasets: [{
            label: 'Test Data',
            data: [12, 19, 3, 5], // Hardcoded data for testing purposes
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
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
  });
  </script>
  
  <style scoped>
  .test-display {
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
  