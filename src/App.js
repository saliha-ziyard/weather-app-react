
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import WeatherData from './pages/WeatherData';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <h1>Hello</h1>
      <WeatherData/> */}
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/weatherdata' element={<WeatherData/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
