import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTtysZ4SpvkPlgFDGACRM0ZlSDRLFrZsQ",

  authDomain: "kicker-57b42.firebaseapp.com",

  projectId: "kicker-57b42",

  storageBucket: "kicker-57b42.appspot.com",

  messagingSenderId: "639443943003",

  appId: "1:639443943003:web:312c19878e0f330be7497e",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
