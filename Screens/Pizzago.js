import React, { useState } from 'react';

import {Button, Image,  ScrollView,  Text,  TextInput,  TouchableOpacity,  View} from 'react-native';
import { StyleSheet } from "react-native";
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import database from '@react-native-firebase/database';

function Pizzago() {
  const [model,setmodel] = useState({});
 let confirm= () =>{
 model.id = database().ref('schooltransportregister/').push().key
 console.log(model.id)

database().ref(`schooltransportregister/${model.id}`).set(model).then((send) => {
        
   
    console.log('Data send')}).catch((dberr)=>{console.log(dberr)})

 }
  return (
    
     <ScrollView>
        <TouchableOpacity>
     <View>
      <View style={{backgroundColor:'orange',height:'12%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginBottom:0}}>Confirm order </Text>
      </View>
<Card style={{padding:10}}>
    <Card.Title onChangeText={(e)=>{setmodel({...model,Chickenpizza: e})}} style={style.otherContainer} title="Chicken pizza" subtitle="Spicy Flavor" />
    <Card.Content>
    <Card.Cover style={{padding:10}} source={require("../images/pizza1.jpeg")} />
      <Title onChangeText={(e)=>{setmodel({...model,200: e})}}>200 RS</Title>
      <Paragraph >Best pizza in taste and quantity</Paragraph>
      <Button  style={{borderRadius:20}} onPress={confirm} title='Confirm' color='orange' />
    </Card.Content>
    
    <Card.Actions>
     
    </Card.Actions>
  </Card>
  <Card style={{padding:10}}>
    <Card.Title style={style.otherContainer} title="Chicken pizza" subtitle="Spicy Flavor" />
    <Card.Content>
    <Card.Cover style={{padding:10}} source={require("../images/pizza1.jpeg")} />
      <Title>200 RS</Title>
      <Paragraph>Best pizza in taste and quantity</Paragraph>
      <Button  style={{borderRadius:20}} onPress={confirm} title='Confirm' color='orange' />
    </Card.Content>
    
    <Card.Actions>
     
    </Card.Actions>
  </Card>
  <Card style={{padding:10}}>
    <Card.Title style={style.otherContainer} title="Chicken pizza" subtitle="Spicy Flavor" />
    <Card.Content>
    <Card.Cover style={{padding:10}} source={require("../images/pizza1.jpeg")} />
      <Title>200 RS</Title>
      <Paragraph>Best pizza in taste and quantity</Paragraph>
      <Button  style={{borderRadius:20}} onPress={confirm} title='Confirm' color='orange' />
    </Card.Content>
    
    <Card.Actions>
     
    </Card.Actions>
  </Card>




</View>




</TouchableOpacity>
      </ScrollView> 
  );
}

export default Pizzago;



const style = {
    otherContainer: {
        textAlign:"center",
    backgroundColor: 'orange',
    },
}