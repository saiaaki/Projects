import React,{useState} from 'react'

function LoginForm() {
    const [data,setData] = useState({
        username:'',
        password:'',
    })
    const {username,password}=data;
    const changeHandler = e =>{
        setData({...data,[e.target.name] : e.target.value})
    }
    const submitHandler =e =>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder='username' value={username} onChange={changeHandler}/><br></br>
                <input type='password' name='password' placeholder='password' value={password} onChange={changeHandler}/><br></br>
                <input type='submit' name='submit'/>
            </form>
        </center> 
    </div>
  )
}

export default LoginForm