// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
// import firebase from 'firebase';
// firebase.auth().useDeviceLanguage();
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

const initializeFirabase = () => { initializeApp(firebaseConfig); };
export default initializeFirabase;