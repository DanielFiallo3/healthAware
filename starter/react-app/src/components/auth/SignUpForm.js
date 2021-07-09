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
  const [currentSymptoms, setCurrentSymptoms] = useState("None");
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
          getLocation,
          updateAllergy,
          updateSeverity}}>
              
            
      <button type='submit'>Sign Up</button>
      </ UserForm >
  );
};

export default SignUpForm;
