/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
// index.js or App.js
// Import the functions you need from the SDKs you need
import { initializeApp,getReactNativePersistence } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMvdFI4TAYBRlyNjUG8PtHTOwfPejdEQ",
  authDomain: "vernal-day-409616.firebaseapp.com",
  databaseURL: "https://vernal-day-409616-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vernal-day-409616",
  storageBucket: "vernal-day-409616.appspot.com",
  messagingSenderId: "831257079947",
  appId: "1:831257079947:web:7dc93c460235b484a5e48e",
  measurementId: "G-P4PD7HV8G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Rest of your application code...
