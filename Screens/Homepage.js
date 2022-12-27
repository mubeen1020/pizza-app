import React from 'react';
import {Button, Image,  ScrollView,  Text,  TextInput,  TouchableOpacity,  View} from 'react-native'; 
import Login from './Login';


function Homepage({navigation}) {
 
  return (
  
    <ScrollView>
         <View>
      <View style={{backgroundColor:'orange',height:'8%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:50,textAlign:'center',marginTop:10}}>Booking Now</Text>
      </View>
      
      <ScrollView>
<TouchableOpacity onPress={()=>navigation.navigate('SchoolBooking')} >

      <View style={{paddingVertical:30,paddingHorizontal:10, margin:20,borderWidth: 1,
    borderColor: "orange",
    borderRadius: 50,display:'flex',alignItems:'center',backgroundColor:'orange'}}>
     <Text style={{textAlign:'center',fontSize:30}}>Book For School</Text>
      <Image
        style={{textAlign:'center',borderRadius:10,width:250}}
        source={require('../images/schooltransport.jpeg')}
       
      />
        </View> 
 </TouchableOpacity>
</ScrollView>


<ScrollView>
<TouchableOpacity onPress={()=>navigation.navigate('LocalBooking')} >

      <View style={{paddingVertical:30,paddingHorizontal:10, margin:20,borderWidth: 1,
    borderColor: "orange",
    borderRadius: 50,display:'flex',alignItems:'center',backgroundColor:'orange'}}>
     <Text style={{textAlign:'center',fontSize:30}}>Book For Office</Text>
      <Image
        style={{textAlign:'center',borderRadius:10,width:250}}
        source={require('../images/officetransport.jpeg')}
       
      />
        </View> 
 </TouchableOpacity>
</ScrollView>


<ScrollView>
<TouchableOpacity onPress={()=>navigation.navigate('industrailBooking')}>

      <View style={{paddingVertical:30,paddingHorizontal:10, margin:20,borderWidth: 1,
    borderColor: "orange",
    borderRadius: 50,display:'flex',alignItems:'center',backgroundColor:'orange'}}>
     <Text style={{textAlign:'center',fontSize:30}}>Book For Industrial Transport</Text>
      <Image
        style={{textAlign:'center',borderRadius:10,width:250,height:160}}
        source={require('../images/indutrailtransport.jpeg')}
       
      />
        </View> 
 </TouchableOpacity>
</ScrollView>

   
   
   
    </View>
      </ScrollView>
     
  );
}

export default Homepage;