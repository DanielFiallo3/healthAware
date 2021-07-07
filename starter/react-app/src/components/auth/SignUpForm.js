import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import UserForm from '../UserForm'

const SignUpForm = () => {
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
  
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, name, email, password, profilePic, allergies, vaccinationCard, additionalDetails, currentSymptoms, geolocation));
      if (data) {
        setErrors(data)
      }
    }
  };

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

  function getLocation() {
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


  if (user) {
    return <Redirect to='/' />;
  }

  return (
      < UserForm onSubmit={onSignUp} setters={{errors, 
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
            
//     <form onSubmit={onSignUp}>
//       <div>
//         {errors.map((error, ind) => (
//           <div key={ind}>{error}</div>
//         ))}
//       </div>
//       <div>
//         <label>Name</label>
//         <input
//           type='text'
//           name='name'
//           onChange={updateName}
//           value={name}
//         ></input>
//       </div>
//       <div>
//         <label>User Name</label>
//         <input
//           type='text'
//           name='username'
//           onChange={updateUsername}
//           value={username}
//         ></input>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type='text'
//           name='email'
//           onChange={updateEmail}
//           value={email}
//         ></input>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           onChange={updatePassword}
//           value={password}
//         ></input>
//       </div>
//       <div>
//         <label>Repeat Password</label>
//         <input
//           type='password'
//           name='repeat_password'
//           onChange={updateRepeatPassword}
//           value={repeatPassword}
//           required={true}
//         ></input>
//       </div>
//       <div>
//         <label>Profile Picture</label>
//         <input
//           type='text'
//           name='profilePic'
//           onChange={updateProfilePic}
//           value={profilePic}
//         ></input>
//       </div>
//       <div>
//         <label>Allergies</label>
//         <select
//           placeholder="Please Select"
//           name='allergies'
//           onChange={updateAllergies}
//           value={allergies}>
//           {["Select", "Peanuts", "Animal Dander", "Gluten", "Shellfish", "Dairy", "Pollen/Dust/Mold", "Other"].map(each => (
//             <option value={each}>{each} </option>
//           ))}
//         </select>
//       </div>
//       {allergies !== "Select" && <div>
//         <label>Severity</label>
//         <select
//           name='severity'
//           onChange={updateSeverity}
//           value={severity}>
//             <option value="Non_threatening">Non-Threatening</option>
//             <option value="Mild">Mild</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Severe">Severe</option>
//             <option value="Life_threatening">Life Threatening</option>
//         </select>
//       </div>}
//       <div>
//         <label>Vaccination Card</label>
//         <input
//           type='text'
//           name='vaxCard'
//           onChange={updateVaccinationCard}
//           value={vaccinationCard}
//         ></input>
//       </div>
//       <div>
//         <label>Current Symptoms</label>
//         <select
//           name='currentSymptoms'
//           onChange={updateCurrentSymptoms}
//           value={currentSymptoms}>
//             <option value="Cough">Cough</option>
//             <option value="Fever">Fever</option>
//             <option value="Chills">Chills</option>
//             <option value="Skin_Rash">Skin Rash</option>
//             <option value="Shortness_of_Breath">Shortness of Breath</option>
//             <option value="Nauseated">Nauseated</option>
//             <option value="Chronic_Pain">Chronic Pain</option>
//           </select>
//       </div>
//       <div>
//         <label>Geolocation</label>
//         <button onclick={getLocation()} >
//           Get My Location
//         </button>
//       </div>
//       <div>
//         <label>Additonal Details</label>
//         <input
//           type='text'
//           name='additionalDetails'
//           onChange={updateAdditionalDetails}
//           value={additionalDetails}
//         ></input>
//       </div>
            
      <button type='submit'>Sign Up</button>
      </ UserForm >
  );
};

export default SignUpForm;
