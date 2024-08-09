$(function () {
  var cityData = {
    "Salem": "97305",
    "Portland": "97201",
    "Woodburn": "97071",
    "Eugene": "97401",
    "Oregon City": "97045",
    "Wilsonville": "97070"
  };

  $('#citySearch').autocomplete({
    source: Object.keys(cityData),
    select: function(event, ui) {
      var cityName = ui.item.value;
      fetchWeather(cityName);
    }
  });
});

function fetchWeather(cityName) {
  var apiKey = "5dc3500fd1c6fa3d7526f8d1b2b748e9";
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&cnt=5&appid=" + apiKey; //builds the url to display the weather. city name is chosen then displays said citynames location and weather information
  
  $.ajax({
      url: apiUrl, //gets the desired url when chosing a city to display correct data
      method: "GET",
  }).then(function(response) { // if the ajax runs correctly it will display the response in the console
      console.log(response);
      displayWeather(response);
  });
}

function displayWeather(weatherData) {
  // var currentWeather = weatherData.current;
  // var forecast = weatherData.forecast.forecastday;

  // Displays the current weather
  var currentWeatherInfo = "<h2>Current Weather for " + weatherData.city.name + "</h2>";
  currentWeatherInfo += "<div class='current-weather'>";
  currentWeatherInfo += "<p>Temperature: " + weatherData.list[0].main.temp + "°F</p>";
  currentWeatherInfo += "<p>Condition: " + weatherData.list[0].weather[0].description + "</p>";
  currentWeatherInfo += "<img src='https://openweathermap.org/img/wn/" + weatherData.list[0].weather[0].icon + "@2x.png' alt='Weather icon'>";
  currentWeatherInfo += "</div>";

  // Displays the 5-day forecast
  var forecastInfo = "<h2>5-Day Weather Forecast</h2>";
  for (var i = 0; i < weatherData.list.length; i++) {
    var day = weatherData.list[i];
    forecastInfo += "<div class='forecast-day'>";
    forecastInfo += "<h3>" + new Date(day.dt_txt).toLocaleDateString() + "</h3>";
    forecastInfo += "<p>Max Temp: " + day.main.temp_max + "°F</p>";
    forecastInfo += "<p>Min Temp: " + day.main.temp_min + "°F</p>";
    forecastInfo += "<p>Condition: " + day.weather[0].description + "</p>";
    forecastInfo += "<img src='https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png' alt='Weather icon'>";
    forecastInfo += "</div>";
  }

  // Updates the HTML content
  $("#currentWeather").html(currentWeatherInfo);
  $("#weatherData").html(forecastInfo); //selects the weatherdata id in the html to display the weatherData text
}
