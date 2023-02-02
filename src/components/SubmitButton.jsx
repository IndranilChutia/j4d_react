import React from 'react'

export default function SubmitButton(props) {

    const {form, text} = props;
  return (
    <button style={{border: "0",
                    padding: "10px 0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "#05283C",
                    color: "white",
                    marginBottom: "10px"}} 
            className="py-2 w-100" type="submit" form={form}>{text}</button>
  )
}
