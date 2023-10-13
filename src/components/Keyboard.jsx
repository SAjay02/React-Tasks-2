import React, { useState } from 'react'
const Keyboard = () => {
    const[keydown,setKeyDown]=useState('');
    function handleKey(e)
    {
        setKeyDown(e.key)
    }
    return (
    <div>
        <input onKeyDown={handleKey}></input>
        {keydown}
    </div>
  )
}
export default Keyboard