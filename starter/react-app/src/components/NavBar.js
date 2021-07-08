import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';


const NavBar = () => {
  const dispatch = useDispatch();

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' exact={true} activeClassName='active'>
            My Profile
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
        <li>
          <button onClick={(demoLogin)}>
            Demo login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
