// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMt8HPDo2ZYMlAnnSgi26yLG4AZ3ynVTo",
    authDomain: "challenge-22a1f.firebaseapp.com",
    projectId: "challenge-22a1f",
    storageBucket: "challenge-22a1f.appspot.com",
    messagingSenderId: "350514525066",
    appId: "1:350514525066:web:f8ed5655ef412218c8ce73",
    measurementId: "G-NYZWM86SXN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

