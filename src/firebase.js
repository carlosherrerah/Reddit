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
  apiKey: "AIzaSyC2Ns1EusYySeC1IVmgc5HYirVLaOYaXLU",
  authDomain: "isei-68b08.firebaseapp.com",
  databaseURL: "https://isei-68b08-default-rtdb.firebaseio.com",
  projectId: "isei-68b08",
  storageBucket: "isei-68b08.appspot.com",
  messagingSenderId: "51420752605",
  appId: "1:51420752605:web:eb9d4a1865a9edd9fec934"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
  firebaseApp,
  databaseFunctions,
  ref: databaseFunctions.ref,
  getDatabase
} 