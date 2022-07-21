import React, { useState,useEffect } from 'react'
import "./style.css";
import Weathercard from './Weathercard';
const Temp = () => {
const[searchValue,setsearchValue]=useState("Gujranwala");
const [tempinfo,settempinfo]=useState({});
const getWeatherinfo=async()=>{
    try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3a499bf87451368a256fcf5034358201`;
const res= await fetch(url);
const data= await res.json();
const{temp,humidity,pressure}=data.main;
const {main:weathermood}=data.weather[0];
const{speed}=data.wind;
const {country,sunset}=data.sys;
const{name}=data;
const newTempinfo={
    temp,
    humidity,
    pressure,
    weathermood,
    speed,
    name,
    country,
    sunset,

};
settempinfo(newTempinfo);
    }
catch(error){
        console.log(error);
    }
};
useEffect(()=>{
    getWeatherinfo();
},[])

  return (
   <>
   <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setsearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherinfo}
           >
            Search
          </button>
        </div>
      </div>
    <Weathercard tempinfo={tempinfo}/>
   </>
  )
}

export default Temp
