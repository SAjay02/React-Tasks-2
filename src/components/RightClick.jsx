import React, { useState } from 'react'
const RightClick = () => {
    const[right,setRight]=useState('');
    const display=["Ajay","Ram","Ragh","Wiku"]
    async function handleMenu(e)
    {
     setRight(display.map((val)=>`${val}\n`))
    }
  return (
    <div>
        <button onContextMenu={handleMenu} style={{marginTop:"2%"}}>Menu Click</button>
        <br/>
        <div >
        <pre><h4>{right}</h4></pre>
        </div>
    </div>
  )
}

export default RightClick