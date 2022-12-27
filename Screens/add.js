import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Button, Image,  Modal,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";


function ADD() {
  const [modalVisible, setModalVisible] = useState(false);
  const [model,setmodel] = useState({});
  let Addnow = () =>{
  
    model.id = database().ref('Addpizza').push().key
    console.log(model.id)
   database().ref(`Addpizza/${model.id}`).set(model).then((send) => {
  
      
       console.log('Data send')}).catch((dberr)=>{console.log(dberr)})
  }
  return (
     <ScrollView>
      <View>
      <View style={{backgroundColor:'orange',height:'20%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>Admin Add </Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,AddDeals: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Add Deals"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,AddMenu: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Add Menu"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,SentMessage: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Sent Message"
        />
        </View>
       

     
    <View style={{padding:20}}>
        <Button onPress={Addnow}  style={{borderRadius:20}} title='Confirm' color='orange' />
    </View>
 
      </View>
      </ScrollView> 
  );
}

export default ADD;



submit:{
    borderRadius:10
}