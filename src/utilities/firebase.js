import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-ewwPvwo9OsKJrzQpv2iQ7BX0ZswGDu8",
    authDomain: "clone-bec25.firebaseapp.com",
    projectId: "clone-bec25",
    storageBucket: "clone-bec25.appspot.com",
    messagingSenderId: "654470618738",
    appId: "1:654470618738:web:772b221356d1a3f7a9eceb",
    measurementId: "G-GKRCBREHS5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }