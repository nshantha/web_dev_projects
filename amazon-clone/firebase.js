import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBKWZdWlQmPjeC2bPbUuU3hu2N3SkiDFDw",
    authDomain: "clone-9736c.firebaseapp.com",
    projectId: "clone-9736c",
    storageBucket: "clone-9736c.appspot.com",
    messagingSenderId: "1046410050248",
    appId: "1:1046410050248:web:f5036c7835e4996da403fd",
    measurementId: "G-3MNMRR9MTN"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider } 