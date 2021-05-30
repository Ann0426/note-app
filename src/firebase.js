import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBVJ__JN4T-cr_JkKn7G1zLlwmpNyEnxVA",
    authDomain: "note-application-46030.firebaseapp.com",
    projectId: "note-application-46030",
    storageBucket: "note-application-46030.appspot.com",
    messagingSenderId: "762169870159",
    appId: "1:762169870159:web:b678b4314930cffb62673a",
    measurementId: "G-LPLVTXGTBH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };