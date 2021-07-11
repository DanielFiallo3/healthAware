import React, {useState} from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import "./marker.css"

const MarkerPoint = ({user, ChangeUserPos}) => {

    const [showInfoWindow, setShowInfoWindow] = useState(false);

return(
    <>   
            <Marker 
                  position={ChangeUserPos(user.geolocation)}
                  title={user.name}
                  visible={true}
                  streetView={false}
                  onClick={() => setShowInfoWindow((s) => !s)}
                  >
                 
                    {showInfoWindow && <InfoWindow
                    className="InfoWindow"
                        position={user.geolocation}>
                        <div className="theBOX">
                            <h3>{user.name}</h3>
                            <img src={user.profilePic} alt="proPic" className="markerProf"></img>
                            <div>
                            {user.allergies
                                ?
                                <div>
                                    <h3>
                                        <div className="allergiesBox">
                                            Allergies: {user.allergies.map(each => (
                                            <ul>
                                                <div className="eachAllergy">
                                                    {each.name}
                                                        <div>
                                                        Severity: {each.severity}
                                                        </div>
                                                </div>
                                            </ul>
                                            ))}
                                        </div>
                                        <p>{user.additionalDetails}</p>
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