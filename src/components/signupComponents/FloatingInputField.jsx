import React from 'react'
import './component_styles/floatingInputField.css'

const FloatingInputField = (props) => {

    const {labelText, type, id, imgSrc} = props;
    return (
        <div class="input-field pt-3">
            <div class="input-inside">
                <input class="input-box floating-input" type={type} name={id} id={id} required="true"/>
                <label class="floating-label " for={id}>{labelText}</label>
            </div>
            {imgSrc ? <img class="input-image" src={imgSrc} alt={id+"img"}/> : null}
        </div>
    )
}

export default FloatingInputField