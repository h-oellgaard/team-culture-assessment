<template>
    <div class="group-join">
      <h2>Select or Create a Group</h2>
      <div class="group-options">
        <!-- Existing Group Selection -->
        <div class="group-option">
          <h3>Join Existing Group</h3>
          <label>Select Group</label>
          <select @change="handleGroupSelection" v-model="selectedGroupName">
            <option value="">-- Select a Group --</option>
            <option v-for="group in groups" :key="group.id" :value="group.name">{{ group.name }}</option>
          </select>
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Enter password" />
          <button @click="createOrJoinGroup" class="action-button">Join Group</button>
        </div>
  
        <!-- New Group Creation -->
        <div class="group-option">
          <h3>Create New Group</h3>
          <label>Group Name</label>
          <input type="text" v-model="groupName" placeholder="Enter new group name" />
          <label>Password (optional)</label>
          <input type="password" v-model="password" placeholder="Enter password" />
          <button @click="createOrJoinGroup" class="action-button">Create Group</button>
        </div>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { addGroup, getGroup, getAllGroups, validateGroup } from '../services/group.service.js';
  
  export default {
    emits: ['group-selected'],
    setup(_, { emit }) {
      const groupName = ref('');
      const password = ref('');
      const error = ref(null);
      const groups = ref([]);
      const selectedGroupName = ref('');
  
      // Load all existing groups from Firebase when the component is mounted
      onMounted(async () => {
        try {
          groups.value = await getAllGroups(); // Fetch groups from Firebase
        } catch (err) {
          error.value = 'Failed to load groups';
        }
      });
  
      // Function to handle group creation or joining
      const createOrJoinGroup = async () => {
        if (!selectedGroupName.value && !groupName.value) {
          error.value = 'Please select or enter a group name';
          return;
        }
  
        try {
          let group;
          if (selectedGroupName.value) {
            // Join the selected existing group
            group = await getGroup(selectedGroupName.value);
            const isValid = await validateGroup(selectedGroupName.value, password.value);
            if (isValid) {
              emit('group-selected', group);
              error.value = null;
            } else {
              error.value = 'Incorrect password';
            }
          } else {
            // Create a new group
            group = await addGroup(groupName.value, password.value);
            emit('group-selected', group);
            error.value = null;
            groups.value = await getAllGroups(); // Refresh the list of groups
          }
        } catch (err) {
          error.value = err.message;
        }
      };
  
      // Function to handle changes in group selection dropdown
      const handleGroupSelection = () => {
        groupName.value = ''; // Clear groupName input if a group is selected
        error.value = null; // Clear any previous errors
      };
  
      return {
        groupName,
        password,
        error,
        groups,
        selectedGroupName,
        createOrJoinGroup,
        handleGroupSelection,
      };
    },
  };
  </script>
  
  <style scoped>
  .group-join {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .group-join h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .group-options {
    display: flex;
    gap: 20px;
  }
  
  .group-option {
    flex: 1;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .group-option h3 {
    margin-bottom: 15px;
    color: #555;
  }
  
  .group-option label {
    margin: 10px 0 5px;
    font-weight: bold;
    color: #444;
  }
  
  .group-option input,
  .group-option select {
    padding: 10px;
    margin-bottom: 15px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    font-size: 1em;
  }
  
  .action-button {
    padding: 10px;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .action-button:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
  }
  </style>
  