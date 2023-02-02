import React from 'react'
import './component_styles/uploadFile.css'

const UploadFile = (props) =>{
    const {labelText, type, id, imgSrc} = props;
    return (
    <div class="input-field pt-2">
        <div class="input-inside">
            <input class="upload-input-box" type={type} name={id} id={id} required/>
            <label class="upload-label" for="resume">{labelText}</label>
        </div>
        {imgSrc ? <img class="input-image" src={imgSrc} alt={id+"img"}/> : null}
    </div>
  )
}

export default UploadFile