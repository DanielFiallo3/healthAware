import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { updatedUser, deleteOneUser} from "../store/session"
import UserForm from "./UserForm"
import Buttons from './NavBar';
import './user.css'

function User() {
  const [edit, setEdit] = useState(false);
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [vaccinationCard, setVaccinationCard] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [currentSymptoms, setCurrentSymptoms] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [allergies, setAllergies] = useState({});
  const [currentPassword, setCurrentPassword] = useState("");
  

  const dispatch = useDispatch();

  const setEditTrue = () => {
    setEdit(true)
  }

  const setEditFalse = () => {
    setEdit(false)
  }

  const deleteUser = () => {
    dispatch(deleteOneUser(user.id))
    window.location.reload()
  }



  const onUpdateForm = (event) => {
    event.preventDefault()
    const newUsername = username
    const newName = name
    const newEmail = email
    const newRepeatPassword = repeatPassword
    const newProfilePicFile = profilePic
    const newVaccinationCardFile = vaccinationCard
    const newAdditionalDetails = additionalDetails
    const newGeolocation = geolocation
    const newAllergies = allergies
    const newCurrentSymptoms = currentSymptoms
    
    
    
    
    if(newPassword === newRepeatPassword) {
      console.log(newPassword, newRepeatPassword)
      dispatch(updatedUser({newUsername, newName, newEmail, newPassword, newRepeatPassword, newProfilePicFile, newVaccinationCardFile, newAdditionalDetails, newGeolocation, newAllergies, newCurrentSymptoms}))
      .then(() => setEditFalse())
      .catch((data) => {
        setErrors(data)
      })
    }else{
      setErrors(["Passwords do not match"])
    }
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const updateCurrentPassword = (e) => {
    setCurrentPassword(e.target.value)
  }

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  
  const updateProfilePic = (e) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      setProfilePic(imgFile)
    } else {
      console.log("no image")
    };
  };

  const updateVaccinationCard = (e) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      setVaccinationCard(imgFile);
    } else {
      console.log("no image")
    }; 
  };

  const updateAdditionalDetails = (e) => {
    setAdditionalDetails(e.target.value);
  };

  const updateCurrentSymptoms = (e) => {
    setCurrentSymptoms(e.target.value);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // console.log("Latitude is :", position.coords.latitude)
        // console.log("Longitude is :", position.coords.longitude)
        setGeolocation(`${position.coords.latitude}, ${position.coords.longitude}`)

    })} else {
      return;
    }
  }

  console.log(allergies,"======================================")

  const updateSeverity = (allergy) => (e) => {
    setAllergies((prevAlergy) => {
      return {
        ...prevAlergy,
        [allergy]: e.target.value
      }
    });
  };

   const updateAllergy = (allergy) => (e) => {
    setAllergies((prevAlergy) => {
      // console.log('updateAllergy function', allergy, prevAlergy[allergy])
      if(prevAlergy[allergy]) {
        return {
          ...prevAlergy,
          [allergy]: null
          }
      } else return {
        ...prevAlergy,
        [allergy]: "Non_threatening"
      }
    });
  };


  useEffect(() => {
    if (user && !user.errors) {
      setName(user.name)
      setUsername(user.username)
      setEmail(user.email)
      setAdditionalDetails(user.additionalDetails)
      setAllergies(user.allergies)
      setCurrentSymptoms(user.currentSymptoms)
      setGeolocation(user.geolocation)
    }
  }, [user])

  const listOfAllergies = Object.entries(user.allergies).filter(each => each[1])
  
  return !edit ?(
    <div>
      <Buttons />
        <div className="profContain">
          <div>
            <h1 className="MYNAME">
              {user.name}
            </h1>
          </div>
          <div>
            <img className="profilePicture" src={user.profilePic} alt="profilePic"></img>
          </div>
          <div className="userInfo">
            {listOfAllergies.length
            ?
              <div>
              <h3>
                My Allergies: {(listOfAllergies).map(each => (
                  <div>
                    {each[0]}
                    <br/>
                    <div>
                      Severity: {each[1]}
                    </div>
                  </div>
                  ))}
              </h3>
            </div>
            :
            <h3>
              No Allergies
            </h3>
            }
            <div>
              <h3>
                Current Symptoms: {user.currentSymptoms}
              </h3>
            </div>
            <div>
              <h3>
                Additional Details:
                <br/> 
                {user.additionalDetails}
              </h3>
            </div>
          <div >
            <img className="IMVAX" src={user.vaccinationCard} alt="vaxCard" ></img>
          </div>
          </div>
          <div>
            <button className="EDITBUTTON" onClick={setEditTrue}> Edit Profile </button>
          </div>
        </div>
      </div>
      ):(
      <div>
        <div className="loginMasterDiv">
        <img className="loginLogo" src="https://i.imgur.com/RipAJxp.png" alt="logo.png"></img>
          <UserForm onSubmit={onUpdateForm} setters={{
              errors, 
              username, 
              name, 
              email, 
              newPassword, 
              repeatPassword, 
              profilePic, 
              vaccinationCard, 
              additionalDetails, 
              currentSymptoms, 
              geolocation,
              allergies,
              currentPassword,
              setErrors,
              updateUsername,
              updateName,
              updateEmail,
              updateCurrentPassword,
              updateNewPassword,
              updateRepeatPassword,
              updateProfilePic,
              updateVaccinationCard,
              updateAdditionalDetails,
              updateCurrentSymptoms,
              getLocation,
              updateAllergy,
              updateSeverity}}>
            <button type='submit' className="fianlBtn">Confirm Changes</button>
            <button type='button' className="fianlBtn2" onClick={setEditFalse}>Cancel Changes</button>
            {user.email !== "demo@aa.io" 
            ?
              <button type='button' className="fianlBtn3" onClick={deleteUser}>Delete User</button>
            :
            <div>
              <button type='button' className="fianlBtn3" disabled={true}>Delete User</button>
              <p>*Demo User Name, Email and Password Not Allowed to be changed or deleted.</p>
            </div>
            }  
          </ UserForm >
        </div>
    </div>
  )
}


export default User;
