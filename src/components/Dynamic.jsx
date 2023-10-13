import React, { useState } from 'react'
const Dynamic = () => {
    const[change,setChange]=useState("");
    function handlechange(e)
    {
        setChange(e.target.value);
    }
  return (
    <div>
        <input onChange={handlechange} placeholder="Enter Name:" ></input>
        <br/>
        {change}
    </div>
  )
}

export default Dynamic