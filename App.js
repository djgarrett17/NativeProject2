
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './routes/homeStack.js';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDIM3gUrCMGyWq2pwd1LbMnKRsb4GSAhoo",
  authDomain: "fir-login-8121e.firebaseapp.com",
  databaseURL: "https://fir-login-8121e.firebaseio.com",
  projectId: "fir-login-8121e",
  storageBucket: "fir-login-8121e.appspot.com",
  messagingSenderId: "421278099083",
  appId: "1:421278099083:web:b17462286d63b1cfc8968e",
  measurementId: "G-GZQQ97D240"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() { 
  return (
    <NavigationContainer>{

      <Navigator/>
   
    }</NavigationContainer>
  );
}


