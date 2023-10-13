import React from 'react'
import { useState } from 'react'
const ListItems = () => {
    const[list,setItem]=useState(["Ajay","Sri","Raghu","Wiku"]);
    function handleDelete(index)
    {
        setItem(old=>{
            return old.filter((v,i)=>i!==index)
        })
    }
  return (
    <div>
        {
            list.map((val,index)=>
            {
                return(
                    <>
                    <h>{val}</h><button onClick={()=>handleDelete(index)}>Delete</button>
                    </>
                )
            })
        }
    </div>
  )
}

export default ListItems