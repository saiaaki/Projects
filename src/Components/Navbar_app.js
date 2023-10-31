import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;



// nxt one
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard/:fullname" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
