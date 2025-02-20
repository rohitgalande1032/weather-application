
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null)
  console.log(weatherDetails)
  return (
    <div className='app'>
     <div className='container'>
      <Header />
      <Search setWeatherDetails={setWeatherDetails}/>
      {weatherDetails && <WeatherCard weatherDetails={weatherDetails}/>}
      <Footer />
     </div>
    </div>
  )
}

export default App
