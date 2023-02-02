import React from 'react'
import './component_styles/inputField.css'

const InputField = (props) => {

    const {labelText, type, id, imgSrc} = props;

    return (
        <div class="input-field pt-2">
            <div class="input-inside">
                <input class="input-box" type={type} name={id} id={id} required/>
                <label class="input-label" for={id}>{labelText}</label>
            </div>
            {imgSrc ? <img class="input-image" src={imgSrc} alt={id+"img"}/> : null}
        </div>
    )
}

export default InputField