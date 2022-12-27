import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import {Button, Image,  ScrollView,  Text,  TextInput,  TouchableOpacity,  View} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function Singup({navigation}) {
  const [model,setmodel] = useState({})
 
  let Signupuser = () =>{
    console.log(model)
    auth()  .createUserWithEmailAndPassword(model.EmailAddress, model.Password)
    .then((res => {
      console.log('User account created & signed in!');
      database().ref(`users/${ res.user.uid}`).set(model) .then((send) => {
        
         navigation.navigate('Login')
        console.log('Data set.')}).catch((dberr)=>{console.log(dberr)})

console.log(res.user.uid)
      console.log(res.user.uid)
      
    }))
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }
  return (
    <ScrollView>
  <TouchableOpacity>
    
      <View>
      <View style={{backgroundColor:'orange',height:'30%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginTop:50}}>Signup</Text>
      </View>
      
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
       
      <View style={{paddingVertical:30}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,UserName: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="User Name"
        />
        </View>
       
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
         <View style={{padding:20}}>
        <Button onPress={Signupuser}  title='signup' color='orange' />
    </View>
         <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center'}}>Dont have an account</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text  style={{textAlign:'center',textDecorationLine:'underline'}}>Signin</Text>
        </TouchableOpacity>
    </View>
        
   
        </View>
       
    </View>
    
      </View>
    
      </TouchableOpacity>
      </ScrollView>
  );
}

export default Singup;