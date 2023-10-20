// import React, { useState } from 'react'

// function Darkmode() {
//     const [dark,setDark] = useState("Light Mode")
//     const handlesubmit =()=>{

//     }
//   return (
//     <div  className='main'>
//         <h3>Click To Change Mode</h3>
//         <button onClick={handlesubmit}>{dark}</button>
//     </div>
//   )
// }

// export default Darkmode



import React, { useState } from 'react';
import './App.css';

function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>React Light/Dark Mode Example</h1>
      <p>This is a simple example of light mode and dark mode in React.</p>
    </div>
  );
}

export default Darkmode;
