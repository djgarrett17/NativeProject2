import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
// import * as firebase from 'firebase';


export default function LoginApp() { 
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) { 
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   }, []);
 
   if (initializing) return null;


  //  auth()
  //  .createUserWithEmailAndPassword('jon.doe@example.com', 'SuperSecretPassword!')
  //  .then(() => {
  //    console.log('User account created & signed in!');
  //  })
  //  .catch(error => {
  //    if (error.code === 'auth/email-already-in-use') {
  //      console.log('That email address is already in use!');
  //    }
 
  //    if (error.code === 'auth/invalid-email') {
  //      console.log('That email address is invalid!');
  //    }
 
  //    console.error(error);
  //  });

 
   if (!user) {
     return (
       <View>
            <Text>Login</Text>
            {/* <Text>Welcome {user.email}</Text> */}
            <Text>email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
              <Text>password</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
              <TouchableOpacity
              style={{ height: 40, width: 140, backgroundColor: 'blue', borderColor: 'gray', borderWidth: 1 }}
              >
                  <Text>Submit</Text>
              </TouchableOpacity>
       </View>
     );
   }

return(
  <View>
    <Text>Welcome {user.email}</Text>
  </View>
)

   }