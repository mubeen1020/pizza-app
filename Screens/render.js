import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import {Button, Image,  ListViewBase,  Text,  TextInput,  View} from 'react-native';


function Render() {
    const [list,setlist]=useState([])


    let getVichelData = () => {
        // let arr=[];
        // database()
        // .ref('Localtransportregister')
        // .once('child_added',dt =>{
        //   let li=Object.values(dt.val())
        //     arr.push(dt.val())
        //     setlist([...li]);
     
        database()
  .ref('/Localtransportregister')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });

        // });
    }

useEffect(()=>{
    getVichelData();
},[])

  
  return (
      
      <View>
      {/* <View style={{backgroundColor:'orange',height:'60%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginTop:0}}>Booking Vichel Details</Text>
      </View> */}
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
        {list.map((e,i)=><View key={i}>
            <Text>{e.VichelType}</Text>
        </View>
        )}
       </View>
       </View>
  );
}

export default Render;