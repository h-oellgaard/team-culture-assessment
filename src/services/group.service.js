// group.service.js
import { db } from './firebase';
import { collection, addDoc, getDocs, query, where, doc } from "firebase/firestore";

/**
 * Function to create a group.
 * Checks if a group with the same name already exists before creating a new one.
 * 
 * @param {string} groupName - The name of the group to create.
 * @param {string} password - The password for the group (optional).
 * @returns {Object} - Returns the newly created group object.
 */
export const addGroup = async (groupName, password) => {
  // Step 1: Check if the group already exists
  const groupQuery = query(collection(db, "groups"), where("name", "==", groupName));
  const querySnapshot = await getDocs(groupQuery);

  if (!querySnapshot.empty) {
    alert("A group with this name already exists. Please choose a different name.");
    throw new Error("A group with this name already exists. Please choose a different name.");
  }

  // Step 2: Create a new group if it doesn't already exist
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name: groupName,
      password: password, // Consider hashing for security
    });
    return { id: docRef.id, name: groupName };
  } catch (error) {
    console.error("Error adding group: ", error);
    throw new Error("Could not create group due to an internal error.");
  }
};

/**
 * Function to get all groups from Firestore.
 * Returns an array of group objects.
 * 
 * @returns {Array} - Array of groups with id and data.
 */
export const getAllGroups = async () => {
  const groups = [];
  const querySnapshot = await getDocs(collection(db, "groups"));
  querySnapshot.forEach((doc) => {
    groups.push({ id: doc.id, ...doc.data() });
  });
  return groups;
};

/**
 * Function to validate a group by name and password.
 * Returns true if a group with the provided name and password exists.
 * 
 * @param {string} groupName - The name of the group.
 * @param {string} password - The password of the group.
 * @returns {boolean} - True if the group and password match, false otherwise.
 */
export const validateGroup = async (groupName, password) => {
  const q = query(
    collection(db, "groups"),
    where("name", "==", groupName),
    where("password", "==", password)
  );
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Returns true if group exists and password matches
};

/**
 * Function to retrieve a specific group by name.
 * Returns the group object if found, or null if not found.
 * 
 * @param {string} groupName - The name of the group to retrieve.
 * @returns {Object|null} - The group object if found, otherwise null.
 */
export const getGroup = async (groupName) => {
  const q = query(collection(db, "groups"), where("name", "==", groupName));
  const querySnapshot = await getDocs(q);
  const groups = [];
  querySnapshot.forEach((doc) => {
    groups.push({ id: doc.id, ...doc.data() });
  });
  return groups.length > 0 ? groups[0] : null; // Return the first match or null if none found
};

/**
 * Function to save a user response to a specific group.
 * Saves the response to a subcollection named "responses" under the specified group document.
 * 
 * @param {string} groupId - The ID of the group to save the response to.
 * @param {Object} response - The response data to save.
 * @returns {void}
 */
export const saveResponseToGroup = async (groupId, response) => {
  try {
    const responseRef = collection(db, `groups/${groupId}/responses`);
    await addDoc(responseRef, response);
    console.log("Response saved successfully.");
  } catch (error) {
    console.error("Error saving response: ", error);
    throw new Error("Could not save the response due to an internal error.");
  }
};
