<div>
//         {errors.map((error, ind) => (
//           <div key={ind}>{error}</div>
//         ))}
//       </div>
//       <div>
//         <label>Name</label>
//         <input
//           type='text'
//           name='name'
//           onChange={updateName}
//           value={name}
//         ></input>
//       </div>
//       <div>
//         <label>User Name</label>
//         <input
//           type='text'
//           name='username'
//           onChange={updateUsername}
//           value={username}
//         ></input>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type='text'
//           name='email'
//           onChange={updateEmail}
//           value={email}
//         ></input>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           onChange={updatePassword}
//           value={password}
//         ></input>
//       </div>
//       <div>
//         <label>Repeat Password</label>
//         <input
//           type='password'
//           name='repeat_password'
//           onChange={updateRepeatPassword}
//           value={repeatPassword}
//           required={true}
//         ></input>
//       </div>
//       <div>
//         <label>Profile Picture</label>
//         <input
//           type='text'
//           name='profilePic'
//           onChange={updateProfilePic}
//           value={profilePic}
//         ></input>
//       </div>
//       <div>
//         <label>Allergies</label>
//         <select
//           placeholder="Please Select"
//           name='allergies'
//           onChange={updateAllergies}
//           value={allergies}>
//           {["Select", "Peanuts", "Animal Dander", "Gluten", "Shellfish", "Dairy", "Pollen/Dust/Mold", "Other"].map(each => (
//             <option value={each}>{each} </option>
//           ))}
//         </select>
//       </div>
//       {allergies !== "Select" && <div>
//         <label>Severity</label>
//         <select
//           name='severity'
//           onChange={updateSeverity}
//           value={severity}>
//             <option value="Non_threatening">Non-Threatening</option>
//             <option value="Mild">Mild</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Severe">Severe</option>
//             <option value="Life_threatening">Life Threatening</option>
//         </select>
//       </div>}
//       <div>
//         <label>Vaccination Card</label>
//         <input
//           type='text'
//           name='vaxCard'
//           onChange={updateVaccinationCard}
//           value={vaccinationCard}
//         ></input>
//       </div>
//       <div>
//         <label>Current Symptoms</label>
//         <select
//           name='currentSymptoms'
//           onChange={updateCurrentSymptoms}
//           value={currentSymptoms}>
//             <option value="Cough">Cough</option>
//             <option value="Fever">Fever</option>
//             <option value="Chills">Chills</option>
//             <option value="Skin_Rash">Skin Rash</option>
//             <option value="Shortness_of_Breath">Shortness of Breath</option>
//             <option value="Nauseated">Nauseated</option>
//             <option value="Chronic_Pain">Chronic Pain</option>
//           </select>
//       </div>
//       <div>
//         <label>Geolocation</label>
//         <button onclick={getLocation()} >
//           Get My Location
//         </button>
//       </div>
//       <div>
//         <label>Additonal Details</label>
//         <input
//           type='text'
//           name='additionalDetails'
//           onChange={updateAdditionalDetails}
//           value={additionalDetails}
//         ></input>
//       </div>