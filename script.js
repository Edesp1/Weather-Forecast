$(function () {
  var cityNames = ["Salem", "Portland", "Woodburn", "Eugene", "Oregon City", "Wilsonville"]; //lists of available cities
  $('#citySearch').autocomplete({ //autocomplete widget for chosen city names
      source: cityNames,
      select: function(event, ui) {
          var cityName = ui.item.value;
          fetchWeather(cityName);
      }
  });
});

function fetchWeather(cityName) {
  var apiKey = "0ae6980ca849403b9c003014241103";
  var apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&days=5&aqi=no&alerts=no&q=" + cityName; //builds the url to display the weather. city name is chosen then displays said citynames location and weather information
  
  $.ajax({
      url: apiUrl, //gets the desired url when chosing a city to display correct data
      method: "GET",
  }).then(function(response) { // if the ajax runs correctly it will display the response in the console
      console.log(response);
      displayWeather(response);
  });
}

function displayWeather(weatherData) { //gathers weather data from the fetchweather function on line 12
  var currentWeather = weatherData.current;
  var forecast = weatherData.forecast.forecastday;

  //displays the same-day weather
  var currentWeatherInfo = "<h2>Current Weather for " + weatherData.location.name + "</h2>";
  currentWeatherInfo += "<div class='current-weather'>";
  currentWeatherInfo += "<p>Temperature: " + currentWeather.temp_f + "°F</p>";
  currentWeatherInfo += "<p>Condition: " + currentWeather.condition.text + "</p>";
  currentWeatherInfo += "<img src='" + currentWeather.condition.icon + "' alt='Weather icon'>";
  currentWeatherInfo += "</div>";

  //displays the 5 day forecast
  var forecastInfo = "<h2>3-Day Weather Forecast</h2>";
    for (var i = 0; i < forecast.length; i++) {
        var day = forecast[i];
        forecastInfo += "<div class='forecast-day'>";
        forecastInfo += "<h3>" + day.date + "</h3>";
        forecastInfo += "<p>Max Temp: " + day.day.maxtemp_f + "°F</p>";
        forecastInfo += "<p>Min Temp: " + day.day.mintemp_f + "°F</p>";
        forecastInfo += "<p>Condition: " + day.day.condition.text + "</p>";
        forecastInfo += "<img src='" + day.day.condition.icon + "' alt='Weather icon'>";
        forecastInfo += "</div>";
    }
    //html content
  $("#currentWeather").html(currentWeatherInfo);
  $("#weatherData").html(forecastInfo); //selects the weatherdata id in the html to display the weatherData text
}
