import React from 'react'
import { useState } from 'react'
const TextLength = () => {
    const[length,setLength]=useState(0);
    function handleChange(e)
    {
        setLength(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} placeholder="Enter Name"></input>
        <br/>
        <h4>{`Length of the Word: ${length.length}`}</h4>
    </div>
  )
}

export default TextLength