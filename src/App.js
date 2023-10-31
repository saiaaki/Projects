import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
 
// import Nameclick from './Components/Nameclick';
import Axios from './Components/Axios';

  
const App = () => {
  return (
    <div className='App'> 
    {/* <Header/>
    <Body/> */}
    {/* <Download/> */}
    {/* <SearchFilter/> */}
    <BrowserRouter>
    <Axios/>
    </BrowserRouter>
    {/* <Nameclick/> */}
    </div>
  );
};

export default App;
