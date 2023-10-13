import React from 'react'
import { useState } from 'react'
const PasswordIndi = () => {
    const[pass,setPass]=useState('');
    function handleChange(e)
    {
        setPass(e.target.value);
    }
    let sty="green";
    let sty1="red";
  return (
    <div>
        <input onChange={handleChange} placeholder="Enter Password"></input>
        <br/>
        <h4 style={{color:`${pass.length>=8?sty:sty1}`}}>{pass.length>=8?"Strong":"Weak"}</h4>
    </div>
  )
}

export default PasswordIndi