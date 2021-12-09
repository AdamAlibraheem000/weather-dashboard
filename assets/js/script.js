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

          // Check if city name is already in array before adding to array
          for (let i = 0; i < searchHistory.length; i++) {
            if (searchHistory[i] === getCityName) {
              console.log("Already in array!");
              break;
            } else {
              searchHistory.push(getCityName);
            }
          }

          // get city
          let currentCity = data.timezone;
          let currentCityDis = document.querySelector(".city-name");
          currentCityDis.textContent = currentCity;

          //get date:
          let currentDateVar = moment().format("MMM Do YYYY");

          // Get weather Icon:
          let wIcon = data.current.weather[0].icon + ".png";
          // let weatherImg = document.createElement("img");
          // weatherImg.setAttribute("src", getWeatherIcon + wIcon);
          // document.body.appendChild(weatherImg);

          let currentIcon = document.querySelector(".current-icon");
          currentIcon.setAttribute("src", getWeatherIcon + wIcon);

          // Get current weather conditions:
          let temp = data.current.temp;
          let humidity = data.current.humidity;
          let windSpeed = data.current.wind_speed;
          let uv = data.current.uvi; //UV index not working

          // Display current weather conditions
          let currentDate = document.querySelector(".current-date");
          currentDate.textContent = currentDateVar;

          let currentTemp = document.querySelector(".current-temp");
          currentTemp.textContent = temp;

          let currentHumd = document.querySelector(".current-humd");
          currentHumd.textContent = humidity;

          let currentWindSpeed = document.querySelector(".current-windSpeed");
          currentWindSpeed.textContent = windSpeed;

          let currentUV = document.querySelector(".current-uvi");
          currentUV.textContent = uv;

          // console.log(uv);
          // console.log(temp);
          // console.log(humidity);
          // console.log(windSpeed);
          // console.log(nextDate);
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

      let dayOneDateDis = document.querySelector(".dayOneDate");
      dayOneDateDis.textContent = dayOneDate;
      let dayOneIconDis = document.querySelector(".dayOneIcon");
      dayOneIconDis.setAttribute("src", getWeatherIcon + dayOneIcon);
      let dayOneTempDis = document.querySelector(".dayOneTemp");
      dayOneTempDis.textContent = dayOneTemp;
      let dayOneWindDis = document.querySelector(".dayOneWind");
      dayOneWindDis.textContent = dayOneWind;
      let dayOneHumdDis = document.querySelector(".dayOneHumd");
      dayOneHumdDis.textContent = dayOneHumd;

      // Day Two
      let dayTwoDate = fiveDayData.list[1].dt_txt;
      let dayTwoIcon = fiveDayData.list[1].weather[0].icon + ".png";
      let dayTwoTemp = fiveDayData.list[1].main.temp;
      let dayTwoWind = fiveDayData.list[1].wind.speed;
      let dayTwoHumd = fiveDayData.list[1].main.humidity;

      let dayTwoDateDis = document.querySelector(".dayTwoDate");
      dayTwoDateDis.textContent = dayTwoDate;
      let dayTwoIconDis = document.querySelector(".dayTwoIcon");
      dayTwoIconDis.setAttribute("src", getWeatherIcon + dayTwoIcon);
      let dayTwoTempDis = document.querySelector(".dayTwoTemp");
      dayTwoTempDis.textContent = dayTwoTemp;
      let dayTwoWindDis = document.querySelector(".dayTwoWind");
      dayTwoWindDis.textContent = dayTwoWind;
      let dayTwoHumdDis = document.querySelector(".dayTwoHumd");
      dayTwoHumdDis.textContent = dayTwoHumd;

      // Day Three
      let dayThreeDate = fiveDayData.list[2].dt_txt;
      let dayThreeIcon = fiveDayData.list[2].weather[0].icon + ".png";
      let dayThreeTemp = fiveDayData.list[2].main.temp;
      let dayThreeWind = fiveDayData.list[2].wind.speed;
      let dayThreeHumd = fiveDayData.list[2].main.humidity;

      let dayThreeDateDis = document.querySelector(".dayThreeDate");
      dayThreeDateDis.textContent = dayThreeDate;
      let dayThreeIconDis = document.querySelector(".dayThreeIcon");
      dayThreeIconDis.setAttribute("src", getWeatherIcon + dayThreeIcon);
      let dayThreeTempDis = document.querySelector(".dayThreeTemp");
      dayThreeTempDis.textContent = dayThreeTemp;
      let dayThreeWindDis = document.querySelector(".dayThreeWind");
      dayThreeWindDis.textContent = dayThreeWind;
      let dayThreeHumdDis = document.querySelector(".dayThreeHumd");
      dayThreeHumdDis.textContent = dayThreeHumd;

      // Day Four
      let dayFourDate = fiveDayData.list[3].dt_txt;
      let dayFourIcon = fiveDayData.list[3].weather[0].icon + ".png";
      let dayFourTemp = fiveDayData.list[3].main.temp;
      let dayFourWind = fiveDayData.list[3].wind.speed;
      let dayFourHumd = fiveDayData.list[3].main.humidity;

      let dayFourDateDis = document.querySelector(".dayFourDate");
      dayFourDateDis.textContent = dayFourDate;
      let dayFourIconDis = document.querySelector(".dayFourIcon");
      dayFourIconDis.setAttribute("src", getWeatherIcon + dayFourIcon);
      let dayFourTempDis = document.querySelector(".dayFourTemp");
      dayFourTempDis.textContent = dayFourTemp;
      let dayFourWindDis = document.querySelector(".dayFourWind");
      dayFourWindDis.textContent = dayFourWind;
      let dayFourHumdDis = document.querySelector(".dayFourHumd");
      dayFourHumdDis.textContent = dayFourHumd;

      // Day Five
      let dayFiveDate = fiveDayData.list[4].dt_txt;
      let dayFiveIcon = fiveDayData.list[4].weather[0].icon + ".png";
      let dayFiveTemp = fiveDayData.list[4].main.temp;
      let dayFiveWind = fiveDayData.list[4].wind.speed;
      let dayFiveHumd = fiveDayData.list[4].main.humidity;

      let dayFiveDateDis = document.querySelector(".dayFiveDate");
      dayFiveDateDis.textContent = dayFiveDate;
      let dayFiveIconDis = document.querySelector(".dayFiveIcon");
      dayFiveIconDis.setAttribute("src", getWeatherIcon + dayFiveIcon);
      let dayFiveTempDis = document.querySelector(".dayFiveTemp");
      dayFiveTempDis.textContent = dayFiveTemp;
      let dayFiveWindDis = document.querySelector(".dayFiveWind");
      dayFiveWindDis.textContent = dayFiveWind;
      let dayFiveHumdDis = document.querySelector(".dayFiveHumd");
      dayFiveHumdDis.textContent = dayFiveHumd;
    });
}

function StoreData() {
  localStorage.setItem("arraySearchHistory", JSON.stringify(searchHistory));
}

function RetrieveData() {
  searchHistory = JSON.parse(localStorage.getItem("arraySeachHistory"));
}
