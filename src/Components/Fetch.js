import React,{useEffect,useState} from 'react'

function Fetch() {
    const[data,setData] =useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json =>{
            console.log(json?.products,"json")
            setData(json?.products)})
    },[])
  return (
    <div className='image'> 
       {/* {data.map(product=><li key = {product.id}>{product.iamges(0)}</li>)} */}
        {data.map(product=><img src={product.images[0]} alt={product.name} />)}
   </div>
  )
}

export default Fetch