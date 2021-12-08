// Array to store search history
searchHistory = [];

// variables
var cityName = "";
var getWeatherIcon = "https://openweathermap.org/img/wn/";

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  cityName = document.getElementById("userInput").value;
  let lat = "";
  let lon = "";

  // Acquire city lat & longitude

  let getCityAPI =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=6a193b0402d92ad688c98786f9ef7e7f";

  let getFiveDay =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&cnt=5&appid=6a193b0402d92ad688c98786f9ef7e7f";

  fiveDayFetch(getFiveDay);

  fetch(getCityAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lat = data.coord.lat;
      lon = data.coord.lon;

      cityLatLon =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=6a193b0402d92ad688c98786f9ef7e7f";

      fetch(cityLatLon)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // Get City name & add to array searchHistory:
          let getCityName = cityName;
          searchHistory.push(getCityName);
          console.log(searchHistory[0]);

          //get date:
          let nextDate = new Date(data.current.dt);
          nextDate.toString();

          // Get weather Icon:
          let wIcon = data.current.weather[0].icon + ".png";
          let weatherImg = document.createElement("img");
          weatherImg.setAttribute("src", getWeatherIcon + wIcon);
          document.body.appendChild(weatherImg);

          // Get current weather conditions:
          // let temp = data.current.temp;
          // let humidity = data.current.humidity;
          // let windSpeed = data.current.wind_speed;
          // let uv = data.current.uvi;

          let dayTwo = new Date(data.daily[1].dt);
          dayTwo.toString();

          // console.log(uv);
          // console.log(temp);
          // console.log(humidity);
          // console.log(windSpeed);
          console.log(nextDate);
        });
    });
});

function fiveDayFetch(cityName) {
  let getCityName = cityName;
  fetch(getCityName)
    .then(function (response) {
      return response.json();
    })
    .then(function (fiveDayData) {
      // Day one
      // Icon, ,data, temp, wind speed ,& humd
      let dayOneDate = fiveDayData.list[0].dt_txt;
      let dayOneIcon = fiveDayData.list[0].weather[0].icon + ".png";
      let dayOneTemp = fiveDayData.list[0].main.temp;
      let dayOneWind = fiveDayData.list[0].wind.speed;
      let dayOneHumd = fiveDayData.list[0].main.humidity;
      // Day Two
      let dayTwoDate = fiveDayData.list[1].dt_txt;
      let dayTwoIcon = fiveDayData.list[1].weather[0].icon + ".png";
      let dayTwoTemp = fiveDayData.list[1].main.temp;
      let dayTwoWind = fiveDayData.list[1].wind.speed;
      let dayTwoHumd = fiveDayData.list[1].main.humidity;
      // Day Three
      let dayThreeDate = fiveDayData.list[2].dt_txt;
      let dayThreeIcon = fiveDayData.list[2].weather[0].icon + ".png";
      let dayThreeTemp = fiveDayData.list[2].main.temp;
      let dayThreeWind = fiveDayData.list[2].wind.speed;
      let dayThreeHumd = fiveDayData.list[2].main.humidity;
      // Day Four
      let dayFourDate = fiveDayData.list[3].dt_txt;
      let dayFourIcon = fiveDayData.list[3].weather[0].icon + ".png";
      let dayFourTemp = fiveDayData.list[3].main.temp;
      let dayFourWind = fiveDayData.list[3].wind.speed;
      let dayFourHumd = fiveDayData.list[3].main.humidity;
      // Day Five
      let dayFiveDate = fiveDayData.list[4].dt_txt;
      let dayFiveIcon = fiveDayData.list[4].weather[0].icon + ".png";
      let dayFiveTemp = fiveDayData.list[4].main.temp;
      let dayFiveWind = fiveDayData.list[4].wind.speed;
      let dayFiveHumd = fiveDayData.list[4].main.humidity;

      console.log("The number is: " + dayFiveIcon);
    });
}
