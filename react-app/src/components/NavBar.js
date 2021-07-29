import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';
import './navbar.css'


const Buttons = () => {
  const dispatch = useDispatch();

  let loggedInUser = useSelector(state => state.session.user)

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }


  return (
    <div>
      <div className='THEDIV'>
        <div>
          {loggedInUser
          ?
            <div class="homeLogoLink">
              <NavLink to='/' exact={true} activeClassName='active'>
                  <img src="https://i.imgur.com/RipAJxp.png" alt="logoPic" className="thePic1"></img>
              </NavLink>
            </div>
          :null}
        </div>


        <div>
          {loggedInUser
          ?
            <div class="profilePicButton">
              <NavLink to='/profile' exact={true} activeClassName='active'>
                <img src={loggedInUser.profilePic} alt="picButton" className="thePic2"></img>
              </NavLink>
            </div>
          :null}
        </div>

        <div>
          {loggedInUser
          ?
            <div className="thePic3">
              <LogoutButton />
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
        {loggedInUser === null
        ?
          <div>
            <button className="loginBtn" onClick={(demoLogin)} type="button">
              Demo login
            </button>
          </div>
        :null}
      </div>
    </div>
  );
}

export default Buttons;
