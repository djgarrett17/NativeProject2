import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

// import * as firebase from 'firebase';


export default function Login({navigation}) { 

 

  // const value1 = 'Jon@jon.com';
  // const passwordValue1 = 'Pass';

  const pressHandlerSignUp = () => {
    navigation.navigate('SignUp')
}
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



   const pressHandlerLogin = () => {

    

   auth()
   .signInWithEmailAndPassword()
   .then(() => {
     console.log('User account signed in!');
     navigation.navigate('Home')
   })
   .catch(error => {
     if (error.code === 'auth/email-already-in-use') {
       console.log('That email address is already in use!');
     }
 
     if (error.code === 'auth/invalid-email') {
       console.log('That email address is invalid!');
       
     }

     if (error.code === 'auth/user-not-found') {
      console.log('User not found! Please sign in.');
      
    }
 
     console.error(error);
   });


   if (user) {
  //  if (user && value1 === user) {
    // const xyz='file:///Users/devingarrett/Desktop/loginFirebase/screens/Home.js'
    navigation.navigate('Home')
  }
  }




  if (user) {
    // const xyz='file:///Users/devingarrett/Desktop/loginFirebase/screens/Home.js'
    navigation.navigate('Home')

  }



 
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
              onPress={pressHandlerLogin}
              style={{ height: 40, width: 140, backgroundColor: 'blue', borderColor: 'gray', borderWidth: 1 }}
              >
                  <Text>Submit</Text>
              </TouchableOpacity>

              
              <TouchableOpacity onPress={pressHandlerSignUp}>
                <Text>signUp</Text>
              </TouchableOpacity>

       </View>
     );
   }

return(
  <View>
    <Text>Welcome {user.email}</Text>
    
    <Text>Login</Text>
            {/* <Text>Welcome {user.email}</Text> */}
            <Text>email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Type here to translate!"
                
              />
              <Text>password</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Type here to translate!"
                
              />
    <TouchableOpacity onPress={pressHandlerLogin}>
      <Text>Submit Login</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={pressHandlerSignUp}>
      <Text>signUp</Text>
    </TouchableOpacity>


  </View>
)

   }