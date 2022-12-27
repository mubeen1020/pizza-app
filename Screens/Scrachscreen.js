import React, { useState } from 'react';
import database from '@react-native-firebase/database';
import {Button, Image,  ImageBackground,  ScrollView,  Text,  TextInput,  TouchableOpacity,  View} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles.js/styling';

function ScrachScreen({navigation}) {
  const [model,setmodel] = useState({})
 
 
  return (
    <ScrollView>
      
      <Image style={{width:300,height:500}} source={require('../images/logo6.png')} />
            
  <TouchableOpacity >
    
     
         <View style={{padding:10}}>
        <Button onPress={()=>navigation.navigate('Singup')} title='Start' color='orange' />
    </View>
      </TouchableOpacity>
     
      </ScrollView>
  );
}

export default ScrachScreen;

