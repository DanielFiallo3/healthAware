import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [vaccinationCard, setVaccinationCard] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [currentSymptoms, setCurrentSymptoms] = useState('');
  const [geolocation, setGeolocation] = useState('');
  
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, name, email, password, profilePic, vaccinationCard, additionalDetails, currentSymptoms, geolocation));
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

  const updateGeolocation = (e) => {
    setGeolocation(e.target.value);
  };


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
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
          type='text'
          name='profilePic'
          onChange={updateProfilePic}
          value={profilePic}
        ></input>
      </div>
      <div>
        <label>Vaccination Card</label>
        <input
          type='text'
          name='vaxCard'
          onChange={updateVaccinationCard}
          value={vaccinationCard}
        ></input>
      </div>
      <div>
        <label>Current Symptoms</label>
        <input
          type='text'
          name='currentSymptoms'
          onChange={updateCurrentSymptoms}
          value={currentSymptoms}
        ></input>
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
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
