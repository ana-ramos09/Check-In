import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACRZVYuNYadJCe8Napjigi8TQaJ1EM_io",
    authDomain: "to-do-list-38184.firebaseapp.com",
    databaseURL: "https://to-do-list-38184.firebaseio.com",
    projectId: "to-do-list-38184",
    storageBucket: "to-do-list-38184.appspot.com",
    messagingSenderId: "848890574082",
    appId: "1:848890574082:web:9503fe078f6490bf9b3e1b"
  };

const run = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();




