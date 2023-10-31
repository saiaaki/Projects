import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Header from '../Firstapp/Header';
const Axios = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        console.log(res?.data.products, "json");
        setData(res?.data.products);
        setFilteredData(res?.data.products);  
      })
  }, []);

  const HighCostItems = () => {
    const filteredItems = data.filter(item => item.price > 550);
    setFilteredData(filteredItems);
  };
  const LowCostItems = () => {
    const filteredItems1 = data.filter(item => item.price < 550);
    setFilteredData(filteredItems1);
  };

  return (
    <div>
      <Header/>
      <div className='filter-btn'>
        <button onClick={HighCostItems}> High cost Items</button>
        <button onClick={LowCostItems}>Low cost Items</button>
      </div>
      <div>
        <ul>
          <h4>
            {filteredData.map(item => (
              <p className='mainDiv' key={item.id}>
                <img src={item.images[0]} alt={item.name} className='image' /><br />
                {item.title} <br />
                {item.price}<br /> {item.brand} <br /><br />
                <button onClick={() => { alert("first check your wallet 😀") }}>Buy Now</button>
              </p>
            ))}
          </h4>
        </ul>
      </div>
    </div>
  )
}

export default Axios;
