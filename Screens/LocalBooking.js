import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Button, Image,  Modal,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";


function Local() {
  const [modalVisible, setModalVisible] = useState(false);
  const [model,setmodel] = useState({});
  let LocalTranReg = () =>{
  
    model.id = database().ref('Localtransportregister').push().key
    console.log(model.id)
   database().ref(`Localtransportregister/${model.id}`).set(model).then((send) => {
  
      
       console.log('Data send')}).catch((dberr)=>{console.log(dberr)})
  }
  return (
     <ScrollView>
      <View>
      <View style={{backgroundColor:'orange',height:'20%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>Local Transport </Text>
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
        <TextInput onChangeText={(e)=>{setmodel({...model,NoOfSeat: e})}}
         style={{
            borderWidth: 1,
            borderColor: 'orange',
          }}
          placeholder="No of Seats"
        />
        </View>

     
    <View style={{padding:20}}>
        <Button onPress={LocalTranReg}  style={{borderRadius:20}} title='Confirm' color='orange' />
    </View>
 
      </View>
      </ScrollView> 
  );
}

export default Local;



submit:{
    borderRadius:10
}