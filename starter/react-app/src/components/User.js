import React from 'react';
import { useSelector} from 'react-redux';

function User() {
  // const [edit, setEdit] = useState(false);
  const user = useSelector(state => state.session.user)
  // const dispatch = useDipatch();

  

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1 >Welcome {user.name} </h1>
      
      <div>
        {user.profilePic}
      </div>

      <div>
        {user.vaccinationCard}
      </div>
      
      <div>
        {user.geolocation}
      </div>

      <div> 
        I am allergic to:
          {user.allergies.map(ale => ( 
            <li key="allergy">{ale.name}</li>
          ))}
      </div>

      <div>
        Severity:
          {user.severity}
      </div>

      <div>
        Curent Symptoms:
          <li> {user.currentSymptoms} </li>
      </div>

      <div>
        Additional Details:
          <li> {user.additionalDetails} </li>
      </div>

      <div>
        Email:
          <li> {user.email} </li>
      </div>

      <div>
        Username:
          <li> {user.username} </li>
      </div>

      {/* <button onClick={() => onEdit(user)}> Edit </button>

      <button onClick={() => onDelete(user)}> Delete User </button> */}

    </div>
  );
}
export default User;
