const Weather = (data) => {
  console.log(data);
  const kelvin = 273.15;
  const element = document.createElement("div");

  const weather = document.createElement("div");
  element.appendChild(weather);
  weather.classList.add("weather");

  const weatherDescription = document.createElement("div");
  weather.appendChild(weatherDescription);
  weatherDescription.textContent = data.weather[0].description;
  weatherDescription.classList.add("weather-description");

  const main = document.createElement("div");
  element.appendChild(main);
  main.classList.add("main");

  const temp = document.createElement("div");
  main.appendChild(temp);
  temp.classList.add("temperature");
  temp.innerHTML =
    "Temperature: " + Math.round(data.main.temp - kelvin) + "&#8451;";

  const feelsLike = document.createElement("div");
  main.appendChild(feelsLike);
  feelsLike.innerHTML =
    "Feels like: " + Math.round(data.main.feels_like - kelvin) + "&#8451;";

  const humidity = document.createElement("div");
  main.appendChild(humidity);
  humidity.classList.add("humidity");
  humidity.textContent = "Humidity: " + data.main.humidity + "%";

  const wind = document.createElement("div");
  element.appendChild(wind);
  wind.classList.add("wind");
  const windSpeed = document.createElement("div");
  wind.appendChild(windSpeed);
  windSpeed.classList.add("wind-speed");
  windSpeed.textContent = "Wind speed: " + data.wind.speed + " km/h";

  return element;
};

export default Weather;
