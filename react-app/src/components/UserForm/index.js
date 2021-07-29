import React, { useState, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Allergies from "../Allergies"
import './index.css'

function UserForm({ onSubmit,
  children,
  setters:
  { errors,
    username,
    name,
    email,
    currentPassword,
    newPassword,
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
    updateSeverity,
    updateCurrentPassword
   } }) {
  // const [edit, setEdit] = useState(false);

  const [buttonA, setButtonA] = useState(false)

  const onLocationClick = () => {
    getLocation()
    setButtonA(true)
  }


  return (
    <div className="masterUserFormDiv">
      <div className="bucket">
        <form onSubmit={onSubmit} className="signUpForm">
          <div className="errorsDiv">
            {errors.map((error, ind) => (
              <div key="error">{error}</div>
            ))}
          </div>
          <div className="nameUserEmail">
            <div>
              <label className="labell">Name</label>
              <input
                className='inputss'
                type='text'
                name='name'
                onChange={updateName}
                value={name}
                id="name"
              ></input>
            </div>
            <div>
              <label className="labell">User Name</label>
              <input
                className='inputss'
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                id="username"
              ></input>
            </div>
            <div>
              <label className="labell">Email</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                className='inputss'
                id="email"
              ></input>
            </div>
          </div>
          <div className="passwordsDiv">
            {updateCurrentPassword
            ?
              <div>
                  <label className="labell">Current Password</label>
                  <input
                    type='password'
                    name='current_password'
                    onChange={updateCurrentPassword}
                    value={currentPassword}
                    className='inputss'
                    id="currentPassword"
                  ></input>
              </div>
            :null
            }
            <div>
              {updateCurrentPassword
              ?
                <label className="labell">New Password</label>
              :
                <label className="labell">Password</label>
              }
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={newPassword}
                className='inputss'
                id="password"
                disabled={updateCurrentPassword && !currentPassword}
              ></input>
            </div>
            <div>
            {updateCurrentPassword
              ?
              <label className="labell">Repeat New Password</label>
              :
              <label className="labell">Repeat Password</label>
              }
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                className='inputss'
                id="repeatPassword"
                disabled={updateCurrentPassword && !currentPassword}
              ></input>
            </div>
          </div>
          <div className="sympDetails">
            <div>
              <label className="labell">Current Symptom</label>
              <select
                className='inputss'
                name='currentSymptoms'
                onChange={updateCurrentSymptoms}
                value={currentSymptoms}
                id="currentSymptoms"
              >
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
              <label className="labell">Additonal Details</label>
              <input
                type='text'
                name='additionalDetails'
                onChange={updateAdditionalDetails}
                value={additionalDetails}
                className='inputss'
                id="additionalDetails"
              ></input>
            </div>
          </div>
          <div className="allergiesDiv">
            <div>
              <label className="labell">Allergies:</label>
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
          </div>
          <div className="geoProVax">
            <div>
              <label className="labell">Geolocation</label>
              <button id='geolocation' onClick={onLocationClick} type="button" disabled={buttonA}>
                Get My Location
              </button>
              <p>
                *If not clicked, will default to "38.957333, -92.391361"
              </p>
            </div>
            <div>
              <label className="labell">Profile Picture</label>
              <input
                type='file'
                name='profilePic'
                // accept="image/*"
                onChange={updateProfilePic}
              // value={profilePic}
              ></input>
            </div>
            <div>
              <label className="labell">Vaccination Card</label>
              <input
                type='file'
                name='vaxCard'
                // accept='pdf/*'
                onChange={updateVaccinationCard}
              // value={vaccinationCard}
              ></input>
            </div>
          </div>
          <br />
          <br />
          {children}
        </form>
      </div>
    </div>

  )
}
export default UserForm;