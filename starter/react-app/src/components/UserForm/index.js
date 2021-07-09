import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Allergies from "../Allergies"

function UserForm({onSubmit, 
children,
setters: 
{errors, 
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
updateSeverity}}) {
  // const [edit, setEdit] = useState(false);



  return (
    <form onSubmit={onSubmit}>
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
            // accept="image/*"
            onChange={updateProfilePic}
            // value={profilePic}
          ></input>
        </div>
        <div> 
          <label>Allergies:</label>
          {["Peanuts", 
          "Animal Dander", 
          "Gluten",
          "Shellfish", 
          "Dairy", 
          "Pollen/Dust/Mold" 
          ].map(each => (
            <Allergies 
            allergen={each} 
            onCheck={updateAllergy(each)}
            checked={!!allergies[each]}
            updateSeverity={updateSeverity(each)}
            severity={allergies[each] && allergies[each].severity}
            />
          ))}
        </div>
        <div>
          <label>Vaccination Card</label>
          <input
            type='file'
            name='vaxCard'
            // accept='pdf/*'
            onChange={updateVaccinationCard}
            // value={vaccinationCard}
          ></input>
        </div>
        <div>
          <label>Current Symptom</label>
          <select
            name='currentSymptoms'
            onChange={updateCurrentSymptoms}
            value={currentSymptoms}>
              <option value="None">None</option>
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
        <button onClick={getLocation} type="button">
          Get My Location
        </button>
      </div>
        <div>
          <label>Additonal Details</label>
          <input
            type='text'
            name='additionalDetails'
            onChange={updateAdditionalDetails}
            value={additionalDetails}
          ></input>
          {children}
          </div>
    </form>

  )
}
export default UserForm;