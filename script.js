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
  var weatherInfo = "<h2>Weather Forecast</h2>"; //makes a h2 element with text under the "weather data id( LINE 31 )"

  weatherInfo += "<p>Location: " + weatherData.location.name + "</p>"; //gathers the weather info variable and adds a p tag with the data and location name
  weatherInfo += "<p>Current Temperature: " + weatherData.current.temp_f + "°F</p>"; // does the same as line 28 but with temperature

  $("#weatherData").html(weatherInfo); //selects the weatherdata id in the html to display the weatherData text
}
