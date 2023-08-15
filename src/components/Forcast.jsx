import React from 'react'


function Forcast() {
  return (
    <div className='forcast'>
        <p className='forcast-title'>DAILY FORCAST</p>
        {/* <hr/> */}
        <div className='forcast-component'>
            <p className='forcast-component-time'>Time</p>
            <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'/> 
            <p className='forcast-component-temp'>30</p>
        </div>
    </div>
    
  )
}

export default Forcast