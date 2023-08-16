import React from 'react'
import '../stylesheets/Home.css'

function Home() {
  return (
    <div className='home'>
        <h1>Welcome to Weather App</h1>

        <div className='home-btn'>
        <button><a href='/login'>Login</a></button>
        <button><a href='/signup'>SignUp</a></button>
        </div>
    </div>
  )
}

export default Home