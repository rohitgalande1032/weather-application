import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }
  console.log(search)
  console.log(import.meta.env.VITE_API_KEY)
  const handleKeyDown = async (e) => {
    if(e.key != "Enter") return

    try {
      const response = await axios(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${search}&aqi=no`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="search-section">
      <div className="search-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
      <input 
        type='text'
        placeholder='Search for a city'
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      
      </div>
    </div>
  )
}

export default Search