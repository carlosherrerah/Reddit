//Wrapper
//Functions that we need from firebase SDK to initialize connection with the FB App
const initializeApp = require("firebase/app").initializeApp;
//Add SDKs for the firebase products that we are using
const databaseFunctions = require("firebase/database");
const getDatabase = databaseFunctions.getDatabase;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxc3yOCVZqebXRo51p1Y4cJIZSvQ69oII",
  authDomain: "charles-eeaa5.firebaseapp.com",
  projectId: "charles-eeaa5",
  storageBucket: "charles-eeaa5.appspot.com",
  messagingSenderId: "838362184133",
  appId: "1:838362184133:web:1349f947e57366f42f73ac"
};



//Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
	firebaseApp,
	databaseFunctions,
	ref : databaseFunctions.ref,
	getDatabase
}
