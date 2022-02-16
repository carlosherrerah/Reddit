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