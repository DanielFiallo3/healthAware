import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';



const MapPageA = () => {
    
const [currentPosition, setCurrentPosition] = useState({lat:43.11016617798622,lng:-89.48826131670266})


//This sets the center of the map. This must be set BEFORE the map loads
   

// This is the equivalent to a script tag

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
})

console.log("--------------------------------------------------", process.env)
  
const containerStyle = {
    width: '800px',
    height: '800px'
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
          center={currentPosition}
          onUnmount={onUnmount}
          >
        <Marker 
              position={currentPosition}
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