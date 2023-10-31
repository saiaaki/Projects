// import React, { useState } from 'react'
// import { Navigate } from 'react-router';
// const Home = () => {
//     const [auth,setAuth] = useState(false);
//     if (auth) {
//         return <Navigate to='/about'/>
//     }
//   return (
//     <div>
//         <center>
//          <h3>welcome to the Home page!!</h3>
//          <button onClick={()=>{setAuth(true)}}>Login</button>
//          </center>
//     </div>
//   )
// }

// export default Home

// functional component useNavigate
import React from 'react'
import {useNavigate} from 'react-router-dom';
 const Home = () => {
   let history =useNavigate();
  return (
    <div>
        <center>
         <h3>welcome to the Home page!!</h3>
         <button onClick={()=>history('./About')}>Login</button>
         </center>
    </div>
  )
}

export default Home