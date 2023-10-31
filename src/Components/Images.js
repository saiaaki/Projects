import React from 'react'
import ReactImg from '../react.png';
import ReactAudio from '../audio1.mp3'
import ReactVideo from '../video1.mp4'
const Images = () => {
  return (
    <div>
      <center>
        <img src={ReactImg} alt='ReactImg' height="250" width="auto"/>  
      <video width='auto' height='250' controls>
        <source src={ReactVideo} type='video/mp4'/>
      </video>
      <audio controls>
            <source src={ReactAudio} type='audio/ogg'/>
        </audio>
      </center>  
    </div>
  )
}

export default Images