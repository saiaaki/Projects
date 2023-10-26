import React,{useEffect,useState} from 'react'
import '../App.css'
import axios from 'axios';
const Axios = () =>{
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then (res => {
            console.log(res?.data.products,"json")
            setData(res?.data.products)})
    },[])
  return (
    <div>
        <ul>
        <h4>{data.map(item=><p className='mainDiv' key={item.id}> <img src={item.images[0]} alt={item.name} className='image'/><br/>{item.title}    <br /> {item.price}<br/> {item.brand} <br/><br/>  <button onClick={()=>{alert("first check your wallet 😀 ")}}>Buy Now</button> </p>
        )}</h4>
        </ul>
    </div>
  )
}

export default Axios 