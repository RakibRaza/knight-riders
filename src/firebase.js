import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDZqiS1hiC5H2_bWR3rLobxhCoJoeCE35w",
  authDomain: "knight-riders-bd.firebaseapp.com",
  projectId: "knight-riders-bd",
  storageBucket: "knight-riders-bd.appspot.com",
  messagingSenderId: "925303730620",
  appId: "1:925303730620:web:90b9bf5b88db9b4532fbb9",
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
