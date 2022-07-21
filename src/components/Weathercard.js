import React, { useEffect, useState } from 'react';

const Weathercard = (props) => {
    const[newweathermood,setnewweathermood]=useState("");
    let sec=props.tempinfo.sunset;
    let date = new Date(sec*1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
    useEffect(()=>{
if(props.tempinfo.weathermood)
{
switch(props.tempinfo.weathermood){
case "Clear":
setnewweathermood("wi-night-clear");
break;
case "Clouds":
setnewweathermood("wi-day-cloudy");
break;
case "Sunny":
setnewweathermood("wi-day-sunny");
break;
default:
setnewweathermood("wi-day-cloudy");
break;

}
}
    },[props.tempinfo.weathermood]);
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${newweathermood}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{props.tempinfo.temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{props.tempinfo.weathermood}</div>
            <div className="place">
            {props.tempinfo.name}, {props.tempinfo.country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}  </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
              {timestr}PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {props.tempinfo.humidity}    <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
              {props.tempinfo.pressure}  <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
              {props.tempinfo.speed}   <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>

  )
}

export default Weathercard
