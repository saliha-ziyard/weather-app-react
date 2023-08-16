import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ForcastWeather = ({ data }) => {
  if (!data || !data.list) {
    return <div>No forecast data available.</div>;
  }

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
      <h2 className='title'>7-Day Weather Forecast</h2>
      <Accordion allowZeroExpanded>
        {data.list.filter((item, idx) => idx % 8 === 0).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
                  <label className="day">{forecastDays[(idx + dayInAWeek) % 7]}</label>
                  <label className="date-time">
                    Date: {new Date(item.dt * 1000).toLocaleDateString()}{" "}
                    Time: {new Date(item.dt * 1000).toLocaleTimeString()}
                  </label>
                  <label className="description">Weather: {item.weather[0].description}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForcastWeather;
