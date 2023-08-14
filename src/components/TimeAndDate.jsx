import React from 'react'

function TimeAndDate() {

    const day = new Date().getDay().toLocaleString();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();


  return (
    <div className='TimeAndDate'>
        <p>{day} | {date} {month}{year} | Local Time {hour} : {minutes}</p>
    </div>
  )
}

export default TimeAndDate