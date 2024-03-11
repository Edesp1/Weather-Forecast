var salemOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97305&days=5&aqi=no&alerts=no"
var portOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97203&days=5&aqi=no&alerts=no"
var woodOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97071&days=5&aqi=no&alerts=no"
var eugOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97401&days=5&aqi=no&alerts=no"
var oregonOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97045&days=5&aqi=no&alerts=no"
var willOr = "http://api.weatherapi.com/v1/forecast.json?key=0ae6980ca849403b9c003014241103&q=97070&days=5&aqi=no&alerts=no"

$(function () {
    var cityNames = ["Salem", "Portland", "Woodburn", "Eugene", "Oregon City", "Willsonville"];
    $('#citySearch').autocomplete({
      source: cityNames,
    });
  });