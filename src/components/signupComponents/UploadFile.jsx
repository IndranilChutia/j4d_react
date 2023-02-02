import React from 'react'
import './component_styles/uploadFile.css'

const UploadFile = (props) =>{
    const {labelText, type, id, imgSrc} = props;
    return (
    <div className="input-field pt-2">
        <div className="input-inside">
            <input className="upload-input-box" type={type} name={id} id={id} required/>
            <label className="upload-label" htmlFor="resume">{labelText}</label>
        </div>
        {imgSrc ? <img className="input-image" src={imgSrc} alt={id+"img"}/> : null}
    </div>
  )
}

export default UploadFile