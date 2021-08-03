import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import UserForm from '../UserForm'
import './signUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [vaccinationCard, setVaccinationCard] = useState(null);
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [currentSymptoms, setCurrentSymptoms] = useState("None");
  const [geolocation, setGeolocation] = useState("38.957333, -92.391361");
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
    }else{
      setErrors(["***Passwords do not match***"])
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


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="loginMasterDiv">
      <img className="loginLogo" src="https://i.imgur.com/RipAJxp.png" alt="logo.png"></img>

        < UserForm onSubmit={onSignUp} setters={{errors, 
            username, 
            name, 
            email, 
            newPassword: password, 
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
            updateNewPassword: updatePassword,
            updateRepeatPassword,
            updateProfilePic,
            updateVaccinationCard,
            updateAdditionalDetails,
            updateCurrentSymptoms,
            getLocation,
            updateAllergy,
            updateSeverity}}>
                
              
          <button className="signUpBottom" type='submit'>Sign Me Up</button>
        </ UserForm >
    </div>
  );
};

export default SignUpForm;
