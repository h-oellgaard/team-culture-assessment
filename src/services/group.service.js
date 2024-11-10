import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Function to create a group
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

// Function to get all groups
export const getAllGroups = async () => {
  const groups = [];
  const querySnapshot = await getDocs(collection(db, "groups"));
  querySnapshot.forEach((doc) => {
    groups.push({ id: doc.id, ...doc.data() });
  });
  return groups;
};

// Function to validate group (match name and password)
export const validateGroup = async (groupName, password) => {
  const q = query(collection(db, "groups"), where("name", "==", groupName), where("password", "==", password));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Returns true if group exists and password matches
};

export const getGroup = async (groupName) => {
    const q = query(collection(db, "groups"), where("name", "==", groupName));
    const querySnapshot = await getDocs(q);
    const groups = [];
    querySnapshot.forEach((doc) => {
      groups.push({ id: doc.id, ...doc.data() });
    });
    return groups.length > 0 ? groups[0] : null; // Return the first match or null if none found
  };
