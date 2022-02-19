const  initializeApp  =  require("firebase/app").initializeApp;
const databaseFunctions = require("firebase/database");
const getDatabase = databaseFunctions.getDatabase;

/*
  Database configuration
  Change from line 15 to 23 the configuration of the database to use your own database from Firebase.
  Debido a que todos tenemos Firebase en espanol, la configuracion de tu BD de Firebase esta en:
    1-Seleccionar "Realtime database"
    2-Click en el engranaje arriba a la izquierda
    3-Seleccionar la primera opcion
    4-Bajar la pagina un poco hasta encontrar "NPM configuration code"
  En caso de no cambiar la configuracion, toda la info almacenada va a dar a la BD de Fernando
*/
const firebaseConfig = {

	apiKey: "AIzaSyB7XgRTEo9vjSDp3omtvohsd2w1Ph7J520",
  
	authDomain: "isei-61c42.firebaseapp.com",
  
	databaseURL: "https://isei-61c42-default-rtdb.firebaseio.com",
  
	projectId: "isei-61c42",
  
	storageBucket: "isei-61c42.appspot.com",
  
	messagingSenderId: "908815792750",
  
	appId: "1:908815792750:web:b045352a82b3f34de2047f"
  
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
  firebaseApp,
  databaseFunctions,
  ref: databaseFunctions.ref,
  getDatabase
} 