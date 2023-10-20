import React,{useState} from 'react'

function Welcome() {
    const [button,setButton] = useState("subscribe");
    const [subscribe,setSubscribe] = useState(false);
    
    const handleSubscribe =() =>{
        if(!subscribe){
            setButton("subscribed");
            setSubscribe(true);
        }
    }
  return (
    <div className='maindiv'>
        <div className='main'>
            <h2>Welcome</h2>
            <p>Thank you! Happy Learning</p>
            <button onClick={handleSubscribe}>{button}</button>
        </div>
    </div>
  );
}

export default Welcome;

 