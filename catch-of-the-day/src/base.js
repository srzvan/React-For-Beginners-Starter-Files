import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAs-1MjdfW_XAP7Czvw24x0b-h9L2V71bg",
  authDomain: "catch-of-the-day-razsbg-b2365.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-razsbg-b2365.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
