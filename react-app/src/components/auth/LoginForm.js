import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './loginForm.css';
import Buttons from '../NavBar';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div className="Infor">
        <h1>
          What is Health Aware?
        </h1>
        <p>
          Health Aware is a self-concept. As a User, you can see the health of the people around you. "Your Health, Our Priority"
        </p>
      </div>
      <div className="loginMasterDiv">
        <img className="loginLogo" src="https://i.imgur.com/RipAJxp.png" alt="logo.png"></img>
        <div className="loginFormDiv">
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <div >
                <input
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={email}
                  autoComplete="off"
                  onChange={updateEmail}
                  className="loginFormInput"
                />
              </div>
              <div>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  autoComplete="off"
                  onChange={updatePassword}
                  className="loginFormInput"
                />
              </div>
            </div>
            <div className="loginButtonDiv">
              < Buttons />
              <button className="loginBtn" type='submit'>Login</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
};

export default LoginForm;
