<!-- src/components/SelectedGroup.vue -->
<template>
    <div class="selected-group" v-if="group">
      <h3>Current Group: {{ group.name }}</h3>
    </div>
  </template>
  
  <script setup>
  
  
  const props = defineProps({
    group: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .selected-group {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #007bff;
    border-radius: 5px;
    background-color: #eef6ff;
  }
  </style>
  