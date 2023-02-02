import React from 'react'
import './component_styles/phoneInput.css'

const PhoneInput = (props) => {

    const {labelText, id, imgSrc} = props;
    return (
        <div className="input-field pt-3">
            <select id="countryCode" name="countryCode">
                <option>Country Code</option>
                <option value="91">IN +91</option>
                <option value="61">AU +61</option>
                <option value="44">UK +44</option>
                <option value="1">US +1</option>
            </select>
            <div className="input-inside">
                <input className="input-box phone-input" type='tel' name={id} id={id} required={true}/>
                <label className="phone-label " htmlFor={id}>{labelText}</label>
            </div>
            {imgSrc ? <img className="input-image" src={imgSrc} alt={id+"img"}/> : null}
        </div>
    )
}

export default PhoneInput