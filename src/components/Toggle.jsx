import React from 'react'
import { useState } from 'react'
const Toggle = () => {
    const[text,setText]=useState(true);
    function handleChange()
    {
        setText(!text)   
    }
  return (
    <div>
         <h2>{text?"Ajay":"Sri"}</h2>
         <button onClick={handleChange}>Click</button>
    </div>
  )
}
export default Toggle