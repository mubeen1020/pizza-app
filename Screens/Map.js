import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

function MapVieW(){


    Geolocation.getCurrentPosition(info => console.log(info));
    const [lang, setlang] = useState('');
    const [long, setlong] = useState('');
    console.log(lang, long);
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setlong(info.coords.longitude);
      setlang(info.coords.latitude);
    });
    return(

<>
<View>

 
<MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{
              height: 500,
              width: 400,
            }}
            region={{
              latitude: lang,
              longitude: long,
              latitudeDelta: 0.009,
              longitudeDelta: 0.0009,
            }}>
            <Marker
              coordinate={{latitude: lang, longitude: long}}
              title="test description"
              description="test description"></Marker>
          </MapView>
  


</View>


</>




    )
}
export default MapVieW