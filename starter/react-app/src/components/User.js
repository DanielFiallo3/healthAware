import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updatedUser, deleteOneUser} from "../store/session"


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
  const [allergies, setAllergies] = useState("Select");
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

  const updateAllergies = (e) => {
    setAllergies(e.target.value);
  };

  const updateSeverity = (e) => {
    setSeverity(e.target.value);
  };

  useEffect(() => {
    if (user && !user.errors) {
      setName(user.name)
      setUsername(user.username)
      setEmail(user.email)
      setAdditionalDetails(user.additionalDetails)
      setCurrentSymptoms(user.currentSymptoms)
      setGeolocation(user.geolocation)
      setAllergies(user.allergies)
      setSeverity(user.severity)
    }
  })


  

  return (
    <form onSubmit={onUpdateForm}>
      <div>
          {errors.map((error, ind) => (
            <div key="error">{error}</div>
          ))}
        </div>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            onChange={updateName}
            value={name}
          ></input>
        </div>
        <div>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>Profile Picture</label>
          <input
            type='file'
            name='profilePic'
            accept="image/*"
            onChange={updateProfilePic}
            value={profilePic}
          ></input>
        </div>
        <div>
          <label>Allergies</label>
          <select
            placeholder="Please Select"
            name='allergies'
            onChange={updateAllergies}
            value={allergies}>
            {["Select", "Peanuts", "Animal Dander", "Gluten", "Shellfish", "Dairy", "Pollen/Dust/Mold", "Other"].map(each => (
              <option value={each}>{each} </option>
            ))}
          </select>
        </div>
        {allergies !== "Select" && <div>
          <label>Severity</label>
          <select
            name='severity'
            onChange={updateSeverity}
            value={severity}>
              <option value="Non_threatening">Non-Threatening</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
              <option value="Life_threatening">Life Threatening</option>
          </select>
        </div>}
        <div>
          <label>Vaccination Card</label>
          <input
            type='file'
            name='vaxCard'
            accept='pdf/*'
            onChange={updateVaccinationCard}
            value={vaccinationCard}
          ></input>
        </div>
        <div>
          <label>Current Symptom</label>
          <select
            name='currentSymptoms'
            onChange={updateCurrentSymptoms}
            value={currentSymptoms}>
              <option value="Cough">Cough</option>
              <option value="Fever">Fever</option>
              <option value="Chills">Chills</option>
              <option value="Skin_Rash">Skin Rash</option>
              <option value="Shortness_of_Breath">Shortness of Breath</option>
              <option value="Nauseated">Nauseated</option>
              <option value="Chronic_Pain">Chronic Pain</option>
            </select>
        </div>
        <div>
          <label>Geolocation</label>
          <input
            type='text'
            name='geolocation'
            onChange={updateGeolocation}
            value={geolocation}
          ></input>
        </div>
        <div>
          <label>Additonal Details</label>
          <input
            type='text'
            name='additionalDetails'
            onChange={updateAdditionalDetails}
            value={additionalDetails}
          ></input>
          <button type='submit'>Confirm Changes</button>
          <button type='button'>Cancel Changes</button>
          {/* <button type='button' onClick={deleteOneUser(user)}>Delete User</button> */}
          </div>
    </form>

  )
}
export default User;
