import React, {useState, useEffect} from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
import "./marker.css"

const MarkerPoint = ({user, ChangeUserPos}) => {

    const [showInfoWindow, setShowInfoWindow] = useState(false);

    // useEffect(() => {
    //     console.log(showInfoWindow)
    //     const closeInfoWindow = () => {
    //         console.log("anything", showInfoWindow) 
    //         showInfoWindow && setShowInfoWindow(false)
    //     }
    //     showInfoWindow && document.addEventListener("click", console.log("not theother oe", showInfoWindow) || closeInfoWindow)
    //     return () => {
    //         document.removeEventListener("click", closeInfoWindow)
    //     }
    // }, [showInfoWindow])


return(
    <>   
            <Marker 
                  position={ChangeUserPos(user.geolocation)}
                  title={user.name}
                  visible={true}
                  streetView={false}
                  onClick={() => setShowInfoWindow(s => !s)}
                  >
                 
                    {showInfoWindow && <InfoWindow
                    className="InfoWindow"
                    position={ChangeUserPos(user.geolocation)}>
                        <div className="theBOX">
                            <h3>{user.name}</h3>
                            <img src={user.profilePic} alt="proPic" className="markerProf"></img>
                            <div>
                            {user.allergies
                                ?
                                <div>
                                    <h3>
                                        <div className="allergiesBox">
                                            Allergies: {Object.entries(user.allergies).filter(each => each[1]).map(each => (
                                            <ul>
                                                <div className="eachAllergy">
                                                    {each[0]}
                                                        <div>
                                                        Severity: {each[1]}
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