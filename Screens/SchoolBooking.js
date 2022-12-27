import React, { useState } from 'react';

import {Button, Image,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";
import database from '@react-native-firebase/database';

function School() {
  const [model,setmodel] = useState({});
 let SchoolTranReg = () =>{
 model.id = database().ref('schooltransportregister/').push().key
 console.log(model.id)

database().ref(`schooltransportregister/${model.id}`).set(model).then((send) => {
        
   
    console.log('Data send')}).catch((dberr)=>{console.log(dberr)})

 }
  return (
     <ScrollView>
      <View>
      <View style={{backgroundColor:'orange',height:'20%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>School Transport </Text>
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
        <TextInput onChangeText={(e)=>{setmodel({...model,PickupAddress: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="Pickup Address"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,SchoolName: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="School Name"
        />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <TextInput onChangeText={(e)=>{setmodel({...model,NoOfSeats: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="No of Seats"
        />
        </View>

  
    <View style={{padding:20}}>
        <Button  style={{borderRadius:20}} onPress={SchoolTranReg} title='Confirm' color='orange' />
    </View>
      </View>
      </ScrollView> 
  );
}

export default School;



submit:{
    borderRadius:10
}