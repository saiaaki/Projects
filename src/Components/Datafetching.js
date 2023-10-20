import React,{useState,useEffect} from 'react'
import axios from "axios";
import { UsersDetails } from './UsersDetails';
function DataFetching() {
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        axios.get('https://khoros-server-vercel-bikhz4mt9-koushil-mankali.vercel.app/api/messages')
        .then(res =>{
            console.log(res.data[0].data.items)
            setMessages(res.data[0].data.items)
        })
        .catch(err =>{
            console.log(err)
        })
    } ,[])
  return (
    <div>
        <h1 align="center">Messages</h1>
        <ul className='ul'>
            {
                // messages.map(message => {message})
                messages.map((message,index) => <UsersDetails key = {index} details = {message}/>)
            }
        </ul>
    </div>
  )
}

export default DataFetching


  