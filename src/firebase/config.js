import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9OcfngSOHOq_tLUJSERwumDJwIkbB1CU",
  authDomain: "fun-chat-f4d40.firebaseapp.com",
  projectId: "fun-chat-f4d40",
  storageBucket: "fun-chat-f4d40.appspot.com",
  messagingSenderId: "112430660382",
  appId: "1:112430660382:web:7de217c81957c39200a70f",
  measurementId: "G-W5QWFCGLQ2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
