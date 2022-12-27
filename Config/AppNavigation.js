
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Homepage from '../Screens/Homepage';
import Singup from '../Screens/Singup';
import Profile from '../Screens/Profile';
import Industrail from '../Screens/IndustrailBooking';
import Local from '../Screens/LocalBooking';
import { useNavigation } from '@react-navigation/native';
import ScrachScreen from '../Screens/Scrachscreen';
import Render from '../Screens/render';
import MapVieW from '../Screens/Map';
import Pizzago from '../Screens/Pizzago';
import Aboutus from '../Screens/Aboutus';
import Pizzagohome from '../Screens/Pizzagohome';


const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="render" component={Render} /> */}
      <Stack.Screen name="Pizza Go" component={ScrachScreen} />
      <Stack.Screen name="Singup" component={Singup} />
      <Stack.Screen name="confirm order" component={Pizzago} />
      <Stack.Screen name="pizzago" component={Pizzagohome} />
      
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="map" component={MapVieW} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Aboutus" component={Aboutus} />
        {/* <Stack.Screen name="industrailBooking" component={Industrail} />
        <Stack.Screen name="SchoolBooking" component={Industrail} />
        <Stack.Screen name="LocalBooking" component={Local} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;