import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home.jsx';
import Blue from './Components/Blue.jsx';
import Red from './Components/Red.jsx';
import './App.css'

function App() {
  return (
    <>
      <div id="container">
        <h1>router</h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link> 
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element= {<Blue/>}/>
            <Route path="/red" element= {<Red />}/>
            <Route path="/" element= {<Home />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
