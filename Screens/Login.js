import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Button, Image,  Text,  TextInput,  View} from 'react-native';
import { Navigate } from "react-router-dom";

function Login({navigation}) {
  const [model,setmodel] = useState({});
  let loginuser =(navigation) => {
    auth().signInEmailAndPassword(model.EmailAddress, model.Password)
  .then((res => {
    console.log('User signed in anonymously');

    database().ref(`users/${ res.user.uid}`).set(model) .then((send) => {
        
      navigation.navigate('Home')
      console.log('Data set.')}).catch((dberr)=>{console.log(dberr)})


    console.log(res.user.uid)
  
  }))
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });

  }
  return (
      
      <View>
      <View style={{backgroundColor:'orange',height:'30%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginTop:30}}>Login</Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,EmailAddress: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Email Address"
        />
        <View style={{paddingVertical:30}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,Password: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Password"
        />
        </View>

    </View>
    <View >
        <Button onPress={()=>navigation.navigate('pizzago')} style={{borderRadius:20}} title='Login' color='orange' />
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center'}}>Dont have an account</Text>
        <Text onPress={()=>navigation.navigate('Singup')} style={{textAlign:'center',textDecorationLine:'underline'}}>Signin</Text>
    </View>
      </View>
  );
}

export default Login;