import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Button, Image,  Modal,  ScrollView,  Text,  TextInput,  View} from 'react-native';
import { StyleSheet } from "react-native";


function Aboutus() {
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
      <View style={{backgroundColor:'orange',height:'20%',}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>About Us</Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10,backgroundColor:'orange',color:"white"}}>
     <Text>

     Enjoy Delightful Italian Cheesiness | Mozzarella, Ricotta, Grana Padano & Romano Are Used. Famous O's Pizza Serves Authentic NYC Style Pizzas In Karachi | Branches At KDA & Defence. Cheesy Cravings Fulfilled. New York City Style. Flavourful Variety.
     Ever since then Sals Pizza has been the place for any New York syte pizza connoisseur. Catering Your Business Lunch Meeting or Family Get Together Is Our Pleasure.

     </Text>
        </View>

     
    <View style={{padding:20}}>
        <Button onPress={LocalTranReg}  style={{borderRadius:20}} title='seemore' color="orange" />
    </View>
 
      </View>
      </ScrollView> 
  );
}

export default Aboutus;



submit:{
    borderRadius:10
}