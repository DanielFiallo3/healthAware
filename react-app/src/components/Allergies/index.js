import React from 'react';

export default function Allergies({allergen, onCheck, checked, updateSeverity, severity}) {
// console.log('yesssssssssssssssss', checked, allergen)
    return (
        <div>
            <div> 
                <label>{allergen}</label>
                <input
                    type='checkbox'
                    name='allergies'
                    onClick={onCheck}
                    checked={checked}
                ></input>
            </div>

            {checked && <div> 
                <select
                    name='severity'
                    onChange={updateSeverity}
                    value={severity}>
                    <option value="Non_threatening">Non-Threatening</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                    <option value="Life_threatening">Life Threatening</option>
                </select>
            </div>}
        </div>
    )
}


// {.map(each => (
