import React,{useState} from 'react'
import data from './City.json'
const SearchFilter = () => {
    const [search,setSearch] = useState('');
  return (
    <div> 
        <center>
            <h4>Enter your City :</h4> 
            <input type='text'value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <br></br>
        {data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city =>{
            return<div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"50%"}}>
                {city.name}
            </div>
        }
        )}  
        </center>
    </div>
  )
}

export default SearchFilter