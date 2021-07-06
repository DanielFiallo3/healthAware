import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const [severity, setSeverity] = useState("");
  

  const dispatch = useDispatch();



  const onUpdateForm = (event) => {
    event.preventDefault()
    const newUsername = username
    const newName = name
    const newEmail = email
    const newPassword = password
    const newRepeatPassword = repeatPassword
    const newProfilePic = profilePic
    const newVaccinationCard = vaccinationCard
    const newAdditionalDetails = additionalDetails
    const newGeolocation = geolocation
    const newAllergies = allergies
    const newSeverity = severity

    if(newPassword === newRepeatPassword) {
      const data = dispatch(updatedUser({newUsername, newName, newEmail, newPassword, newRepeatPassword, newProfilePic, newVaccinationCard, newAdditionalDetails, newGeolocation, newAllergies, newSeverity}))
      if (data) {
        setErrors(data)
      }
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
    setProfilePic(e.target.value);
  };

  const updateVaccinationCard = (e) => {
    setVaccinationCard(e.target.value);
  };

  const updateAdditionalDetails = (e) => {
    setAdditionalDetails(e.target.value);
  };

  const updateCurrentSymptoms = (e) => {
    setCurrentSymptoms(e.target.value);
  };

  const updateGeolocation = (e) => {
    setGeolocation(e.target.value);
  };

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


  

  return (
    < UserForm onSubmit={onUpdateForm} setters={{errors, 
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
        updateGeolocation,
        updateAllergy,
        updateSeverity}}>
      <button type='submit'>Confirm Changes</button>
      </ UserForm >
  )
}
export default User;
