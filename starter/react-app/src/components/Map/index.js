import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';


const MapPageA = () => {
    
const UserPositionString =  useSelector(state => state.session.user.geolocation);

function ChangeUserPos(StringPos) {
    let finalObj = {lat:null, lng:null}
    let array = StringPos.split(',')
    
    finalObj.lat = +array[0]
    finalObj.lng = +array[1]
    
    return finalObj
}

const UserPosition = ChangeUserPos(UserPositionString)

console.log("---------", (UserPosition))

//This sets the center of the map. This must be set BEFORE the map loads
   

// This is the equivalent to a script tag

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
})

console.log("--------------------------------------------------", process.env)
  
const containerStyle = {

    width: '2000px',
    height: '2000px'
  };

const [map, setMap] = useState(null)
  
const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
 
 
    return (
      // Important! Always set the container height explicitly
      
      <div className="map_page__container">
 
        <div style={{ height: '900px', width: '900px' }}>
        {isLoaded && <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={8}
          center={UserPosition}
          onUnmount={onUnmount}
          >
        <Marker 
              position={UserPosition}
              title="Ananya Hans"
              streetView={false}> 

              {/* <InfoWindow position={{currentPosition}} >
                <div>
                  <span>Ananya Hans</span>
                </div>
              </InfoWindow> */}
              
        </Marker>
    
        </GoogleMap>}
        </div>
       
      </div>
    );
          
}
 
export default MapPageA