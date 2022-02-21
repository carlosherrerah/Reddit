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
  apiKey: "AIzaSyBDgAJlW1HNBmQPJv1kmhmk2UEb5O1qjKQ",
  authDomain: "myfirstproyect-37848.firebaseapp.com",
  databaseURL: "https://myfirstproyect-37848-default-rtdb.firebaseio.com",
  projectId: "myfirstproyect-37848",
  storageBucket: "myfirstproyect-37848.appspot.com",
  messagingSenderId: "190693976866",
  appId: "1:190693976866:web:17c5aae983262c56a8137b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

module.exports = {
  firebaseApp,
  databaseFunctions,
  ref: databaseFunctions.ref,
  getDatabase
} 