import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

function User() {
  const user = useSelector(state => state.session.user)

  // useEffect(() => {
  //   if (!user) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${user.id}`);
  //     const userr = await response.json();
  //     setUser(userr);
  //   })();
  // }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {user.id}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
