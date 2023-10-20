import React, {useState}from 'react'

function Text() {
    const [text,setText]=useState('');
  return (
    <div> 
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>hello {text}</p>
    </div>
  )
}

export default Text

 