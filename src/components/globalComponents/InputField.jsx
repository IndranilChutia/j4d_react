import React from 'react'
import './globalComponentStyles/inputField.css';

const InputField = (props) => {

    const {labelText, type, id, imgSrc} = props;

    return (
        <div className="input-field pt-2">
            <div className="input-inside">
                <input className="input-box" type={type} name={id} id={id} required/>
                <label className="input-label" htmlFor={id}>{labelText}</label>
            </div>
            {imgSrc ? <img className="input-image" src={imgSrc} alt={id+"img"}/> : null}
        </div>
    )
}

export default InputField