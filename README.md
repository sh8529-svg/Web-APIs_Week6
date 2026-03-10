# Web-APIs_Week6
#Weather Wood Machine
## About this project 
Weather Wood Machine is a small interactive website that uses a **Weather API** to display the current weather of the city.
Users can type in a location, and the page will fetch real-time weather data using **JavaScript and Web APIs**.
The website then changes its **background color, sound, and animation** depending on the temperature and weather condition.

---

## How It Works
  1. The user enters a city name.
  2. The website fetches weather data from the **Visual Crossing Weather API**.
  3. The page updates based on the weather:
     - Hot Weather: Orange background + high sound
     - Cold Weather: Light blue background + low sound
     - Mild Weather: Gray background
  4. It it is raining, a **rain animation** appears on the screen.

---

## Screenshot
<img width="848" height="671" alt="website_weather_mood_machine" src="https://github.com/user-attachments/assets/8fed5079-37d6-4582-b277-81be3df0ecc2" />

---

## Features
- Research weather by entering a city name
- Background color changes based on temperature
- Rain animation appears when it is raining
- Sound feedback based on temperature
- Uses real-time date from Weather API

---

## Example Code
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`) .then(response => response.json()) .then(data => { const temp = data.currentConditions.temp; const condition = data.currentConditions.conditions; console.log(temp, condition); });

---

## Technologies Used 
- HTML
- CSS
- JavaScript
- Weather API

---

## Quote
"The internet is a gobal network that allows computers to communicate and share information."


