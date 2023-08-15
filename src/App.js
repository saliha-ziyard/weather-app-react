
import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherData from './pages/WeatherData';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Login/>
      <h1>Hello</h1>
      <WeatherData/>
      
    </div>
  );
}

export default App;
