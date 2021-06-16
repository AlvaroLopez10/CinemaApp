/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import * as firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_FDk7HCv0f2eNCRJ9nurOmRWuJ5-nkkg",
  authDomain: "movies-5c2ea.firebaseapp.com",
  databaseURL: "https://movies-5c2ea.firebaseio.com",
  projectId: "movies-5c2ea",
  storageBucket: "movies-5c2ea.appspot.com",
  messagingSenderId: "916455894083",
  appId: "1:916455894083:web:78aa5ffaf280f8f758b8f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
