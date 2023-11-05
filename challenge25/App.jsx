import React, { useState } from "react"
import weatherData from "./Data/Data"

/* Challenge

The weather data is currently hardcoded into the JSX. Your task is to insert it via JavaScript so the app can be dynamic. 
      
    1. Based on whether the day is currently set to Monday, Tuesday, or Wednesday, the app should 
       use state to automatically display the correct items for the following:
        - background image
        - emoji icon (☀️, 🌧️, or ❄️)
        - weather condition
        - low & high temperatures
        - day of the week
    
    2. When you click on the test button, the app should show all of the correct items listed above 
       for the next day in the weatherData array, cycling through the pattern: Monday -> Tuesday -> Wednesday -> Monday, etc. 
    
    3. The weatherData array can be moved, but it should not be otherwise modified. 
       
    4. The code should be modular and well-organized. 
*/

export default function App() {
  
  const [currentDay, setCurrentDay ] = useState(weatherData[0])

  function handleClick(e) {
    let index
    if (currentWeather.id === 0) {
      index = 1
    } else if (currentWeather.id === 1){
      index = 2
    } else {
      index = 0
    }

    let day = weatherData[index]
    setCurrentDay(day)
  }

  if (currentDay.condition === "Sunny") {
    emoji = "☀️"
  }
  else if (currentDay.condition === "Rainy") {
    emoji = "🌧️"
  }
  else {
    emoji = "❄️"
  }

  let emoji


  
  return (
    <div className={`app-container ${currentWeather.condition.toLowerCase()}-background`}> 
      <div className="weather-container">
        <div className="icon">{emoji}</div>
        <div className="condition-text">{currentDay.condition}</div>
        <div className="temp-range-container">
            <div className="low-temp-container">
              <p className="low-temp-data">{currentDay.lowTemp}°</p>
              <p>Low</p>
            </div>
            <div className="high-temp-container">
              <p className="high-temp-data">{currentDay.highTemp}°</p>
              <p>High</p>
            </div>
        </div>
        <div className="day">{currentDay.day}</div>
      </div>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}