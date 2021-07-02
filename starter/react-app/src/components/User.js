import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(state => state.session.user)

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome {user.name} {user.allergies.map(ale => ( 
        <h3>{ale.name}</h3>
       ))}</h1>
    </div>
  );
}
export default User;
