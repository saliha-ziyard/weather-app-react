import React from 'react'

function TimeAndDate() {

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday', 'Sunday']
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

    const day = new Date().getDay().toLocaleString();
    const dayName = weekdays[day];
    const date = new Date().getDate();

    const month = new Date().getMonth();
    const monthName = monthNames[month];

    const year = new Date().getFullYear();

    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();


  return (
    <div className='TimeAndDate'>
        <p>{dayName} | {date} {monthName} {year} | Local Time {hour}:{minutes}</p>
    </div>
  )
}

export default TimeAndDate