import React,{useState} from 'react'

function SigninForm() {
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
    //     if(password === confirmpassword){
    //         console.log(data);
    //     }
    //    else{
    //     console.log("passwords does not matching")
    //    }
    if(username.length<=5){
        alert("username must be 5 characters")
    }
    else if(password!== confirmpassword){
        alert("password not matching")
    }
    else{
        console.log(data)
    }
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' value={username} onChange={changeHandler} placeholder='username'/><br></br>
                <input type='email' name='email' value={email} onChange={changeHandler} placeholder='email'/><br></br>
                <input type='password' name='password' value={password} onChange={changeHandler} placeholder='password'/><br></br>
                <input type='password' name='confirmpassword' value={confirmpassword} onChange={changeHandler} placeholder='confirmpassword'/><br></br>
                {password !== confirmpassword ? <p style={{"color":"red"}}>passwords not matching</p>:null}
                <input type='submit'/>
            </form>
        </center>
    </div>
  )
}

export default SigninForm