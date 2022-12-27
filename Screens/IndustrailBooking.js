import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Button, Image,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";
import database from '@react-native-firebase/database';


function Industrail() {
  const [model,setmodel] = useState({});
  let IndustrailTranReg = (e) =>{
    model.id = database().ref('industrailtransportregister').push().key
    console.log(model.id)
   database().ref(`industrailtransportregister/${model.id}`).set(model).then((send) => {
           
      
       console.log('Data send')}).catch((dberr)=>{console.log(dberr)})
   
    }
  return (
     <ScrollView>
      <View>
      <View style={{backgroundColor:'orange',height:'20%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>Industrail Transport </Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,VichelType: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Vichel Type"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,StartingPoint: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Starting Point"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,EndPoint: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="End Point"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,NoOfVichel: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="No of Vichels"
        />
        </View>

  
    <View style={{padding:20}}>
        <Button onPress={IndustrailTranReg}  style={{borderRadius:20}} title='Confirm' color='orange' />
    </View>
      </View>
      </ScrollView> 
  );
}

export default Industrail;



submit:{
    borderRadius:10
}