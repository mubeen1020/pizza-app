import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Button, Image,  Modal,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";


function Pizzagohome({navigation}) {
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
      <View style={{backgroundColor:'orange',height:'15%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>Pizza GO </Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
      <Button onPress={()=>{navigation.navigate("Aboutus")}}  style={{borderRadius:20}} title='About Us' color='orange' />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <Button onPress={()=>{navigation.navigate("confirm order")}}  style={{borderRadius:20}} title='Order Now' color='orange' />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <Button onPress={()=>navigation.navigate('map')}  style={{borderRadius:20}} title='Map View' color='orange' />
        </View>
        <View style={{paddingVertical:30,paddingHorizontal:10,}}>
        <Button onPress={()=>navigation.navigate('Profile')}  style={{borderRadius:20}} title='Profile' color='orange' />
        </View>

     
    
 
      </View>
      </ScrollView> 
  );
}

export default Pizzagohome;



submit:{
    borderRadius:10
}