import React { useEffect, useState } from 'react';
import { useSelector, useDipatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateUser } from ''


function User() {
  // const [edit, setEdit] = useState(false);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(user ? user.username : "");
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");
  const [repeatPassword, setRepeatPassword] = useState(user ? user.repeat_password : "");
  const [profilePic, setProfilePic] = useState(user ? user.profilePic : "");
  const [vaccinationCard, setVaccinationCard] = useState(user ? user.vaccinationCard : "");
  const [additionalDetails, setAdditionalDetails] = useState(user ? user.additionalDetails : "");
  const [currentSymptoms, setCurrentSymptoms] = useState(user ? user.currentSymptoms : "");
  const [geolocation, setGeolocation] = useState(user ? user.geolocation : "");
  const [allergies, setAllergies] = useState(user ? user.allergies : "");
  const [severity, setSeverity] = useState(user ? user.severity : "");
  const [user, setUser] = useState(user ? user : "")

  const dispatch = useDipatch();
  const user = useSelector(state => state.session.user)



  const updateForm = (event) => {
    event.preventDefault()
    const newUsername = username
    const newName = name
    const newEmail = email
    const newPassword = password
    const newRepeatPassword = repeatPassword
    const newProfilePic = profilePic
    const newVaccinationCard = vaccinationCard
    const newAdditionalDetails = additionalDetails
    const newGeolocation = geolocation
    const newAllergies = allergies
    const newSeverity = severity

    if(newPassword === newRepeatPassword) {
      const data = dispatch(updateUser({newUsername, newName, newEmail, newPassword, newRepeatPassword, newProfilePic, newVaccinationCard, newAdditionalDetails, newGeolocation, newAllergies, newSeverity}))
      if (data) {
        setErrors(data)
      }
    }

  }

  return (
    <form>
    </form>

  )
}
export default User;
