import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updatedUser, deleteOneUser} from "../store/session"
import UserForm from "./UserForm"

function User() {
  // const [edit, setEdit] = useState(false);
  const user = useSelector(state => state.session.user)

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [vaccinationCard, setVaccinationCard] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [currentSymptoms, setCurrentSymptoms] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [allergies, setAllergies] = useState({});
  

  const dispatch = useDispatch();



  const onUpdateForm = (event) => {
    event.preventDefault()
    const newUsername = username
    const newName = name
    const newEmail = email
    const newPassword = password
    const newRepeatPassword = repeatPassword
    const newProfilePicFile = profilePic
    const newVaccinationCardFile = vaccinationCard
    const newAdditionalDetails = additionalDetails
    const newGeolocation = geolocation
    const newAllergies = allergies
    const newCurrentSymptoms = currentSymptoms

    if(newPassword === newRepeatPassword) {
      dispatch(updatedUser({newUsername, newName, newEmail, newPassword, newRepeatPassword, newProfilePicFile, newVaccinationCardFile, newAdditionalDetails, newGeolocation, newAllergies, newCurrentSymptoms}))
      .catch((data) => {
        setErrors(data)
      })
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

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

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
        console.log("Latitude is :", position.coords.latitude)
        console.log("Longitude is :", position.coords.longitude)
        setGeolocation(`${position.coords.latitude}, ${position.coords.longitude}`)

    })} else {
      return;
    }
  }

  const updateSeverity = (allergy) => (e) => {
    setAllergies((prevAlergy) => {
      return {
        ...prevAlergy,
        [allergy]: {
          severity: e.target.value
        }
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
        [allergy]: {
          severity: "Non_threatening"
        }
      }
    });
  };


  useEffect(() => {
    if (user && !user.errors) {
      setName(user.name)
      setUsername(user.username)
      setEmail(user.email)
      setAdditionalDetails(user.additionalDetails)
      setCurrentSymptoms(user.currentSymptoms)
      setGeolocation(user.geolocation)
    }
  }, [user])

  let listOfAllergies = user.allergies
  

  return (
    <div>
      <div>
        <div>
          <h1>
            {user.name}'s Profile Page
          </h1>
        </div>
        <div>
          <img src={user.profilePic} alt="profilePic"></img>
        </div>
        <div>
          <img src={user.vaccinationCard} alt="vaxCard"></img>
        </div>
        {listOfAllergies
        ?
          <div>
          <h3>
            My allergies: {listOfAllergies.map(each => (
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
      </div>
      <div>
        <UserForm onSubmit={onUpdateForm} setters={{errors, 
            username, 
            name, 
            email, 
            password, 
            repeatPassword, 
            profilePic, 
            vaccinationCard, 
            additionalDetails, 
            currentSymptoms, 
            geolocation,
            allergies,
            setErrors,
            updateUsername,
            updateName,
            updateEmail,
            updatePassword,
            updateRepeatPassword,
            updateProfilePic,
            updateVaccinationCard,
            updateAdditionalDetails,
            updateCurrentSymptoms,
            getLocation,
            updateAllergy,
            updateSeverity}}>
          <button type='submit'>Confirm Changes</button>
        </ UserForm >
      </div>
    </div>
  )
}
export default User;
