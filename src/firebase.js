const  initializeApp  =  require("firebase/app").initializeApp;
const databaseFunctions = require("firebase/database");
const getDatabase = databaseFunctions.getDatabase;

const firebaseConfig = {
  apiKey: "AIzaSyAp1SpocaZKrfaTc8acx19l2j_FTWu0HK0",
  authDomain: "isei07a-up190227.firebaseapp.com",
  databaseURL: "https://isei07a-up190227-default-rtdb.firebaseio.com",
  projectId: "isei07a-up190227",
  storageBucket: "isei07a-up190227.appspot.com",
  messagingSenderId: "735499267875",
  appId: "1:735499267875:web:98b188f4a33bb66ea02696"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
  firebaseApp,
  databaseFunctions,
  ref: databaseFunctions.ref,
  getDatabase
} 