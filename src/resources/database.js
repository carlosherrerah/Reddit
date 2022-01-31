//A file that will contain database information
// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app").initializeApp;
// Add SDKs for Firebase products that you want to use
const databaseFunctions = require("firebase/database");
const getDatabase = databaseFunctions.getDatabase;

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiNR-vZHCzewo2leEvUbfOdlQPrOY-ivk",
  authDomain: "isei-1787f.firebaseapp.com",
  databaseURL: "https://isei-1787f-default-rtdb.firebaseio.com",
  projectId: "isei-1787f",
  storageBucket: "isei-1787f.appspot.com",
  messagingSenderId: "905199548978",
  appId: "1:905199548978:web:9c05c601f001ed68745a2b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
    firebaseApp, 
    databaseFunctions,
    ref : databaseFunctions.ref,
    getDatabase
};