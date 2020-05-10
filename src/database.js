import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAJ6fK0cwSEkDuVfyhaCO2ISPgS40FKgY",
  authDomain: "principlesx-react.firebaseapp.com",
  databaseURL: "https://principlesx-react.firebaseio.com",
  projectId: "principlesx-react",
  storageBucket: "principlesx-react.appspot.com",
  messagingSenderId: "147587364060",
  appId: "1:147587364060:web:6e476a47e878f649873019",
  measurementId: "G-1RRLPEJNW3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;