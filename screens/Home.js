import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
// import * as firebase from 'firebase';


export default function Home() { 


    const pressHandlerSignOut = () => {  
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    }


return(
  <View>
    <Text>Welcome Home</Text>
    <Text>Welcome Home</Text>
    <Text>Welcome Home</Text>
    <Text>Welcome Home</Text>
    <Text>Welcome Home</Text>
    <TouchableOpacity onPress={pressHandlerSignOut}>
      <Text>signOut</Text>
    </TouchableOpacity>
  </View>
)

   }