// src/services/group_service.js

// Mock database til at gemme grupper i hukommelsen
let groups = [];

/**
 * Tilføj en ny gruppe.
 * @param {string} name - Gruppens navn.
 * @param {string} [password] - Kodeord (valgfrit).
 * @returns {object} Den oprettede gruppe.
 */
export function addGroup(name, password = null) {
  if (groups.some(group => group.name === name)) {
    throw new Error('A group with this name already exists.');
  }

  const newGroup = {
    name,
    password,
    id: Math.random().toString(36).substr(2, 9)
  };
  
  groups.push(newGroup);
  return newGroup;
}

/**
 * Hent en gruppe baseret på navn.
 * @param {string} name - Gruppens navn.
 * @returns {object|null} Returnerer gruppen eller null, hvis den ikke findes.
 */
export function getGroup(name) {
  return groups.find(group => group.name === name) || null;
}

/**
 * Valider en gruppe baseret på navn og kodeord.
 * @param {string} name - Gruppens navn.
 * @param {string} [password] - Kodeordet (valgfrit).
 * @returns {boolean} Returnerer true, hvis gruppen findes og kodeordet er korrekt.
 */
export function validateGroup(name, password) {
  const group = getGroup(name);
  if (!group) {
    return false;
  }
  return group.password === null || group.password === password;
}

/**
 * Hent alle grupper.
 * @returns {array} Returnerer en liste over alle grupper.
 */
export function getAllGroups() {
  return groups;
}
