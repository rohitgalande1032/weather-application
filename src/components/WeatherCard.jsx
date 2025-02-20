import React from 'react'
import CloudyImage from '../assets/cloudy.png'

const WeatherCard = ({weatherDetails}) => {
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp_c">
          {weatherDetails.current.temp_c}<sup>o</sup>
        </div>
        <div className="weather-detail">
          <span>{weatherDetails.current.humidity}</span>
          <span>{weatherDetails.current.cloud}</span>
        </div>
        <div className="weather-place">
          {weatherDetails.location.name}, {weatherDetails.location.region}, {weatherDetails.location.country}
        </div>
        <div className="weather-avatar">
          <img src={CloudyImage} />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard