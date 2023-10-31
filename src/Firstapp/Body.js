import React from 'react'
import cakeimg from './cakeIMG.png';
    
const Body = () => {
    const Fooditems = (props) => {
        console.log(props);
      return (
        <>
        <div className='res-card'>
        <img src={cakeimg} className='cake-img' alt='cakeimg' />
        <h3>{props.resname}</h3>
        <p>{props.Flavour} </p>
        <h4>4.5 stars</h4>
        <p>30 Minutes</p>
    </div>
    </>
      )}
  return (
    <div className='body-container'>
         <div className='search'>
            <input width='100px'placeholder='search'/>
         </div>
          <div className='res-container'>
         <Fooditems
         resname ="Famous Backery"
         Flavour = "Vanilla Cake"
         />
         <Fooditems
         resname = "Olive Backery"
         Flavour = "Red Velvet Cake"
         />
          
         </div>
    </div>
  )
}

export default Body