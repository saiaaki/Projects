import React,{useState} from 'react';
import axios from 'axios';
function Database() {
    const [data,setData] = useState({
        username :'',
        email :'',
        password :'',
        confirmpassword:'',
    })
    const {username,email,password,confirmpassword} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('https://project-sai-69515-default-rtdb.firebaseio.com/register.json',data)
        .then(()=>alert("Submitted successfully"))
       
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' value={username} onChange={changeHandler} placeholder='username'/><br></br>
                <input type='email' name='email' value={email} onChange={changeHandler} placeholder='email'/><br></br>
                <input type='password' name='password' value={password} onChange={changeHandler} placeholder='password'/><br></br>
                <input type='password' name='confirmpassword' value={confirmpassword} onChange={changeHandler} placeholder='confirmpassword'/><br></br>
                <input type='submit'/>
            </form>
        </center>
    </div>
  )
}

export default Database