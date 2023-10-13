import React, { useState } from 'react'
const Doubelremove = () => {
    const[list,setList]=useState(["Play","Sleep","Work","Eat","Roaming"]);
    function handleDelete(index)
    {
        setList(old=>{
            return(
                old.filter((val,i)=>i!==index)
            )
        })
    }
  return (
    <div>
        {list.map((val,index)=>
        {
            return(
            <>
            <h4 onDoubleClick={()=>handleDelete(index)}>{val}</h4>
            </>
            )
        })}
    </div>
  )
}

export default Doubelremove