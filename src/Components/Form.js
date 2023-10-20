import React,{ useState } from 'react'

function Form() {
    const initialFormData = {
        firstname: '',
        lastname: '',
        email :'',
        };
    const [data,setData] = useState(initialFormData);
    const [formshow,setFormshow] = useState(false);
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
    };
    const handlesubmit = (e)=>{
        e.preventDefault();  
        console.log('Form submitted with data:', data);
        setData(initialFormData);
    };
  return (
    <div>
        <h3>Registration Form</h3>
        {formshow ? (
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="firstname">Firstname :</label>
                <input type='text' id='firstname' name='firstname' value={data.firstname} onChange={handlechange}/> 
                {/* <input type='text' id='firstname'/> */}
            </div>
            <div>
                <label htmlFor="lastname">Lastname :</label>
                <input type='text' id='lastname' name='lastname' value={data.lastname} onChange={handlechange}/> 
            </div>
            <div>
                <label htmlFor="email">email :</label>
                <input type='email' id='email'name='email' value={data.email} onChange={handlechange}/> 
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <button onClick={()=>setFormshow(false)}>close</button>
        </form>
        ):(
                <button onClick={()=>setFormshow(true)}>Sign in</button>
        )}
    </div>
    
  )
}

export default Form