//Wrapper
//Functions that we need from firebase SDK to initialize connection with the FB App
const initializeApp = require("firebase/app").initializeApp;
//Add SDKs for the firebase products that we are using
const databaseFunctions = require("firebase/database");
const getDatabase = databaseFunctions.getDatabase;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Ns1EusYySeC1IVmgc5HYirVLaOYaXLU",
  authDomain: "isei-68b08.firebaseapp.com",
  databaseURL: "https://isei-68b08-default-rtdb.firebaseio.com",
  projectId: "isei-68b08",
  storageBucket: "isei-68b08.appspot.com",
  messagingSenderId: "51420752605",
  appId: "1:51420752605:web:eb9d4a1865a9edd9fec934"
};


//Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
	firebaseApp,
	databaseFunctions,
	ref : databaseFunctions.ref,
	getDatabase
}
