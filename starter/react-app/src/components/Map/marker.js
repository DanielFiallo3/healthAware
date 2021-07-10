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
                            <h3>{user.name}</h3>
                            <img src={user.profilePic} alt="proPic"></img>
                            <div>
                            {user.allergies
                                ?
                                <div>
                                <h3>
                                    Allergies: {user.allergies.map(each => (
                                    <ul>
                                        <div>
                                        {each.name}
                                            <div>
                                            Severity: {each.severity}
                                            </div>
                                        </div>
                                    </ul>
                                    ))}
                                </h3>
                                </div>
                                :
                                <h3>
                                No Allergies
                                </h3>
                                }
                            </div>
                        </div>
                    </InfoWindow>} 
                   
            </Marker>
        </>
    )
}

export default MarkerPoint