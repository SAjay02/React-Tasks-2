import React from 'react'
import { useState } from 'react'
const MouseOver = () => {
    const[mouse,setMouse]=useState("blue");
    function handleOn()
    {
        setMouse("yellow");
    }
    function handleOff()
    {
        setMouse("green");
    }
  return (
    <div style={{height:"10vh",width:"10vh",border:"2px solid black",backgroundColor:`${mouse}`}}>
        <p onMouseOver={handleOn} onMouseOut={handleOff} style={{color:"white"}}>Hello</p>
    </div>
  )
}

export default MouseOver