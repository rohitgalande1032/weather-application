
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null)

  return (
    <>
     <div>
      <Header />
      <Search />
      {weatherDetails && <WeatherCard />}
      <Footer />
     </div>
    </>
  )
}

export default App
