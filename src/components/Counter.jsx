import React from 'react'
import { useState } from 'react'
export default function Counter()
{
    const[current,setCurrent]=useState(0);
    function handleInc()
    {
        setCurrent(current+1);
    }
    function handleDe1()
    {
        setCurrent(0);
    }
    return(
        <div style={{marginTop:"15%"}}>        
        <button onClick={handleInc} >Increment</button>
        <br/>
        <h2>{current}</h2> 
        <button onClick={handleDe1}>Reset</button>
        </div>
    )
}