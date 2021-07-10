import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';
import "../components/auth/loginForm.css"


const Buttons = () => {
  const dispatch = useDispatch();

  let loggedInUser = useSelector(state => state.session.user)

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }


  return (
    <div>
      <div>

        <div>
          {loggedInUser
          ?
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </div>
          :null}
        </div>

        <div>
          {loggedInUser === null
          ?
            <div>
              <NavLink className="loginBtn" id="NewUser" to='/sign-up' exact={true} activeClassName='active'>
                New User?
              </NavLink>
            </div>
          :null}
        </div>

        <div>
          {loggedInUser
          ?
            <div>
              <NavLink to='/profile' exact={true} activeClassName='active'>
                My Profile
              </NavLink>
            </div>
          :null}
        </div>

        <div>
          {loggedInUser
          ?
            <div>
              <LogoutButton />
            </div>
          :null}
        </div>

        <div>
          {loggedInUser === null
          ?
            <div>
              <button className="loginBtn" onClick={(demoLogin)}>
                Demo login
              </button>
            </div>
          :null}
        </div>


        {/* {loggedInUser === null
        ?
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
        :null} */}

      </div>
    </div>
  );
}

export default Buttons;
