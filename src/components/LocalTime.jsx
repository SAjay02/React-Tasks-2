import React, { useEffect } from 'react'
import { useState } from 'react'
const LocalTime = () => {
    const[curr,setCurr]=useState(new Date());
    useEffect(()=>
    {
        const interval=setInterval(()=>
        {
            setCurr(new Date());
        },1000);
        return ()=>clearInterval(interval);
    },[]);
  return (
    <div>
        <p>{curr.toLocaleTimeString()}</p>
    </div>
  )
}
export default LocalTime