// Getting elements from the DOM.
var cityInput = document.querySelector('#cityInput');
var button = document.querySelector('#btn');
var infoDiv = document.querySelector('#weather-info');

// My custom API Key from open weather map.
const API_KEY = '49ce896d6ed81b1ee453b7414ff6997d';

// Adding event listener when the user presses the get weather button
button.addEventListener('click', function() {
  // Saving the user input in a variable.
  var city = cityInput.value;

  // If the input is empty an alert is risen
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  // API URL
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  // Creating a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configuring the request using the GET method
  xhr.open('GET', apiUrl, true);

  // Set up the event handler for when the request is complete
  xhr.onload = function() {
    // If statement only when request is successful
    if (xhr.status === 200) {
        // Parsing the json data
      var data = JSON.parse(xhr.responseText);
        
      // Getting weather info from the parsed data
      const weatherDescription = data.weather[0].description;
      const temperatureKelvin = data.main.temp;
      const windSpeed = data.wind.speed;
      const cityName = data.name;
      const temperatureCelsius = temperatureKelvin - 273.15;

      //Setting up the div for the weather info
      infoDiv.innerHTML = `
        <p>The weather in ${cityName} is ${weatherDescription}</p>
        <p>The temperature is ${temperatureCelsius.toFixed(2)}°C with a wind Speed of ${windSpeed}m/s</p>
      `;
    } else {
      // If request failed
      infoDiv.textContent = 'Error: City not found or API error';
    }
  };

  // Handle network errors
  xhr.onerror = function() {
    infoDiv.textContent = 'Network error';
  };

  // Sending the request
  xhr.send();
});
