// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER';
const DELETE_USER = 'session/DELETE_USER'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
});

const deleteUser = (user) => ({
  type: DELETE_USER,
  payload: user
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, name, email, password, profilePic, allergies, severity, vaccinationCard, additionalDetails, currentSymptoms, geolocation) => async (dispatch) => {
  console.log("___________",currentSymptoms, severity)
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name,
      email,
      profilePic,
      vaccinationCard,
      additionalDetails,
      currentSymptoms,
      geolocation,
      password,
      allergies,
      severity
    }),
  });

  export const updatedUser = (newUsername, newName, newEmail, newPassword, newRepeatPassword, newProfilePic, newVaccinationCard, newAdditionalDetails, newGeolocation, newAllergies, newSeverity) => async (dispatch) => {
  const response = await fetch('/api/auth/user', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newUsername, 
      newName, newEmail,
       newPassword,
        newRepeatPassword,
        newProfilePic,
        newVaccinationCard,
        newAdditionalDetails,
        newGeolocation,
        newAllergies,
        newSeverity
    }),
  });

  if (response.ok && !user) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.ok && user) {
    const data = await response.json();
    dispatch(updateUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const deleteOneUser = (userId) => async (dispatch) => {
  const res = await fetch('/api/auth/user', {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteUser(userId));
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case UPDATE_USER:
      return { user: action.payload }
    case DELETE_USER:
      return state
    default:
      return state;
  }
}
