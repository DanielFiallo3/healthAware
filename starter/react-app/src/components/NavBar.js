import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';


const NavBar = () => {
  const dispatch = useDispatch();

  let loggedInUser = useSelector(state => state.session.user)

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  return (
    <nav>
      <ul>

        {loggedInUser
        ?
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
        :null}


        {loggedInUser === null
        ?
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>
        :null}


        {loggedInUser === null
        ?
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
        :null}


        {loggedInUser
        ?
          <li>
            <NavLink to='/profile' exact={true} activeClassName='active'>
              My Profile
            </NavLink>
          </li>
        :null}


        {loggedInUser
        ?
          <li>
            <LogoutButton />
          </li>
        :null}

        {loggedInUser === null
        ?
          <li>
            <button onClick={(demoLogin)}>
              Demo login
            </button>
          </li>
        :null}


      </ul>
    </nav>
  );
}

export default NavBar;
