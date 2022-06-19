import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //v9
import "firebase/compat/firestore";
import "firebase/compat/storage";

//import { cityDb } from "./temp/m-city-export";

const firebaseConfig = {
  apiKey: "AIzaSyBovk5lzhK5jaKNcAM4Pj3zn2aqWnTf8k8",
  authDomain: "mcity-12919.firebaseapp.com",
  projectId: "mcity-12919",
  storageBucket: "mcity-12919.appspot.com",
  messagingSenderId: "257237935719",
  appId: "1:257237935719:web:5d6743222e7525b18056c2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection("matches");
const playersCollection = DB.collection("players");
const positionsCollection = DB.collection("positions");
const promotionsCollection = DB.collection("promotions");
const teamsCollection = DB.collection("teams");

/* cityDb.matches.forEach((item) => {
  matchesCollection.add(item);
}); */

/* cityDb.players.forEach((item) => {
  playersCollection.add(item);
}); */

/* cityDb.positions.forEach((item) => {
  positionsCollection.add(item);
}); */

/* cityDb.promotions.forEach((item) => {
  promotionsCollection.add(item);
}); */
/* cityDb.teams.forEach((item) => {
  teamsCollection.add(item);
}); */

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection,
};
