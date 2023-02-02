import React from 'react'
import './component_styles/floatingInputField.css'

const FloatingInputField = (props) => {

    const {labelText, type, id, imgSrc} = props;
    return (
        <div className="input-field pt-3">
            <div className="input-inside">
                <input className="input-box floating-input" type={type} name={id} id={id} required={true}/>
                <label className="floating-label " htmlFor={id}>{labelText}</label>
            </div>
            {imgSrc ? <img className="input-image" src={imgSrc} alt={id+"img"}/> : null}
        </div>
    )
}

export default FloatingInputField