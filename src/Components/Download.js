import React from 'react';
import image from '../react.png';
const Download = () => {
  return (
    <div> 
        <center>
            <img src={image} width='auto' height='250px' alt='data'/><br/>
            <a href={image} className='download-img' download="image">click here to download</a> 
        </center>
    </div>
  )
}

export default Download