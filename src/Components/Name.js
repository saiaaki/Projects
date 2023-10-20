import React, { useState } from 'react'

function Name() {
    const [value,setValue]=useState("sai");
    let onchange = (e)=>{
        const newvalue = e.target.value;
        setValue(newvalue);
    };
  return (
    <div> 
        <input placeholder='enter something' onChange={onchange}/>
        {value}
    </div>
  )
}

export default Name