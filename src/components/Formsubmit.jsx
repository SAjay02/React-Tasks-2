import React from 'react'
import { useState } from 'react'
const Formsubmit = () => {
    const[sub,setSub]=useState('');
    function handleChange(e)
    {
        setSub(e.target.value);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(sub);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter Name" onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Formsubmit