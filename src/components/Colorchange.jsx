import React from 'react'
import { useState } from 'react'
const Colorchange = () => {
    const color=["red","grey","yellow","white"];
    let random=Math.floor(Math.random()*4);
    const[Colorchange,setColor]=useState("blue");
    function handleChange()
    {
        setColor(color[random])
    }
  return (
    <div style={{backgroundColor:`${Colorchange}`,height:"100vh"}}>
        <button onClick={handleChange}>Change</button>
    </div>
  )
}
export default Colorchange