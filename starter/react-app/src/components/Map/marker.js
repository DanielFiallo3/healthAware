import React, {useState} from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'

const MarkerPoint = ({user, ChangeUserPos}) => {

    const [showInfoWindow, setShowInfoWindow] = useState(false);

return(
    <>   
            <Marker 
                  position={ChangeUserPos(user.geolocation)}
                  title={user.name}
                  streetView={false}
                  onClick={() => setShowInfoWindow((s) => !s)}
                  >
                 
                    {showInfoWindow && <InfoWindow
                        position={user.geolocation}>
                        <div>
                            <h1>InfoWindow</h1>
                        </div>
                    </InfoWindow>} 
                   
            </Marker>
        </>
    )
}

export default MarkerPoint