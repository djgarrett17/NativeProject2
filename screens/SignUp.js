import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase';


export default function SignUp({navigation}) { 
  const [initValue1, value1] = useState('');
  const [initPasswordValue1, passwordValue1] = useState('');

    // var value1 = 'Jon1@jon.com';
    // var passwordValue1 = 'Password1!';
    function onSubmit(e){
    
      e.preventDefault()
      console.log("submit form")
      console.log(initValue1)
  
      firebase
      .firestore()
      .collection('loginSamples')
      .add({
        initValue1,
        initPasswordValue1,
      })
      .then(() => {
        value1('')
        passwordValue1('')
        
      })
    }



    


const pressHandlerSubmitSignUp = () => {  

   auth()
   .createUserWithEmailAndPassword(value1, passwordValue1)
   .then(() => {
     console.log('User account created & signed in!');
     navigation.navigate('Home')
   })
   .catch(error => {
     if (error.code === 'auth/email-already-in-use') {
       console.log('That email address is already in use!');
       navigation.navigate('Login')
     }
 
     if (error.code === 'auth/invalid-email') {
       console.log('That email address is invalid!');
       
     }
     if (error.code === 'auth/user-not-found') {
      console.log('User not found! Please sign in.');
      
    }
 
     console.error(error);
   });


}


return(
  <View onSubmit={onSubmit}>
    <Text>Welcome SignUp</Text>
    <Text>Sign Up</Text>
            {/* <Text>Welcome {user.email}</Text> */}
            <Text>email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Type here to translate!"
                // value={value1}
                value={initValue1} onChange={e => value1(e.currentTarget.value)}
              />
              <Text>password</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Type here to translate!"
                // value={passwordValue1}
                value={initPasswordValue1} onChange={e => passwordValue1(e.currentTarget.value)}
                
              />
    <TouchableOpacity onPress={pressHandlerSubmitSignUp}>
      <Text>signUp</Text>
    </TouchableOpacity>

  </View>
)

   }