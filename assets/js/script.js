// Array to store search history
searchHistory = [];

// variables
var cityName = "";
var getWeatherIcon = "https://openweathermap.org/img/wn/";

var btn = document.querySelector(".btn");
var btnSearchHistory = document.querySelector(".btn-d");
var ulSearchResults = document.querySelector(".search-display");

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
        "&units=imperial&appid=6a193b0402d92ad688c98786f9ef7e7f";

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
              StoreData();
            }
          }

          // get city
          let currentCity = data.timezone;
          let currentCityDis = document.querySelector(".city-name");
          currentCityDis.textContent = currentCity;

          //get date & convert to standard time:
          let currentDateVar = data.current.dt;
          parseInt(currentDateVar);
          let convertDateVar = currentDateVar * 1000;
          let updateConvertDate = new Date(convertDateVar);

          // Get weather Icon:
          let wIcon = data.current.weather[0].icon + ".png";

          let currentIcon = document.querySelector(".current-icon");
          currentIcon.setAttribute("src", getWeatherIcon + wIcon);

          // Get current weather conditions:
          let temp = data.current.temp;
          let humidity = data.current.humidity;
          let windSpeed = data.current.wind_speed;
          let uv = data.current.uvi; //UV index not working

          // Display current weather conditions
          let currentDate = document.querySelector(".current-date");
          currentDate.textContent = updateConvertDate;

          let currentTemp = document.querySelector(".current-temp");
          currentTemp.textContent = "temp: " + temp;

          let currentHumd = document.querySelector(".current-humd");
          currentHumd.textContent = "humidity: " + humidity;

          let currentWindSpeed = document.querySelector(".current-windSpeed");
          currentWindSpeed.textContent = "wind speed: " + windSpeed;

          let currentUV = document.querySelector(".current-uvi");
          currentUV.textContent = "uv index: " + uv;
          currentUV.style.backgroundColor = "red";

          if (uv < 0.3) {
            currentUV.style.backgroundColor = "green";
          } else if (uv > 0.3 && uv < 0.7) {
            currentUV.style.backgroundColor = "yellow";
          } else {
            currentUV.style.backgroundColor = "red";
          }

          // Five day data
          // Day one
          // Icon, ,data, temp, wind speed ,& humd
          let dayOneDate = data.daily[1].dt;
          parseInt(dayOneDate);
          let convertDayOneDate = dayOneDate * 1000;
          let updateDayOneDate = new Date(convertDayOneDate);
          let dayOneIcon = data.daily[1].weather[0].icon + ".png";
          let dayOneTemp = data.daily[1].temp.day;
          let dayOneWind = data.daily[1].wind_speed;
          let dayOneHumd = data.daily[1].humidity;

          let dayOneDateDis = document.querySelector(".dayOneDate");
          dayOneDateDis.textContent = updateDayOneDate;
          let dayOneIconDis = document.querySelector(".dayOneIcon");
          dayOneIconDis.setAttribute("src", getWeatherIcon + dayOneIcon);
          let dayOneTempDis = document.querySelector(".dayOneTemp");
          dayOneTempDis.textContent = "temp: " + dayOneTemp;
          let dayOneWindDis = document.querySelector(".dayOneWind");
          dayOneWindDis.textContent = "wind Speed: " + dayOneWind;
          let dayOneHumdDis = document.querySelector(".dayOneHumd");
          dayOneHumdDis.textContent = "humidity: " + dayOneHumd;

          // Day Two
          let dayTwoDate = data.daily[2].dt;
          parseInt(dayTwoDate);
          let convertDayTwoDate = dayTwoDate * 1000;
          let updateTwoOneDate = new Date(convertDayTwoDate);
          let dayTwoIcon = data.daily[2].weather[0].icon + ".png";
          let dayTwoTemp = data.daily[2].temp.day;
          let dayTwoWind = data.daily[2].wind_speed;
          let dayTwoHumd = data.daily[2].humidity;

          let dayTwoDateDis = document.querySelector(".dayTwoDate");
          dayTwoDateDis.textContent = updateTwoOneDate;
          let dayTwoIconDis = document.querySelector(".dayTwoIcon");
          dayTwoIconDis.setAttribute("src", getWeatherIcon + dayTwoIcon);
          let dayTwoTempDis = document.querySelector(".dayTwoTemp");
          dayTwoTempDis.textContent = "temp: " + dayTwoTemp;
          let dayTwoWindDis = document.querySelector(".dayTwoWind");
          dayTwoWindDis.textContent = "wind Speed: " + dayTwoWind;
          let dayTwoHumdDis = document.querySelector(".dayTwoHumd");
          dayTwoHumdDis.textContent = "humidity: " + dayTwoHumd;

          // Day Three
          let dayThreeDate = data.daily[3].dt;
          parseInt(dayThreeDate);
          let convertDayThreeDate = dayThreeDate * 1000;
          let updateThreeOneDate = new Date(convertDayThreeDate);
          let dayThreeIcon = data.daily[3].weather[0].icon + ".png";
          let dayThreeTemp = data.daily[3].temp.day;
          let dayThreeWind = data.daily[3].wind_speed;
          let dayThreeHumd = data.daily[3].humidity;

          let dayThreeDateDis = document.querySelector(".dayThreeDate");
          dayThreeDateDis.textContent = updateThreeOneDate;
          let dayThreeIconDis = document.querySelector(".dayThreeIcon");
          dayThreeIconDis.setAttribute("src", getWeatherIcon + dayThreeIcon);
          let dayThreeTempDis = document.querySelector(".dayThreeTemp");
          dayThreeTempDis.textContent = "temp: " + dayThreeTemp;
          let dayThreeWindDis = document.querySelector(".dayThreeWind");
          dayThreeWindDis.textContent = "wind Speed: " + dayThreeWind;
          let dayThreeHumdDis = document.querySelector(".dayThreeHumd");
          dayThreeHumdDis.textContent = "humidity: " + dayThreeHumd;

          // Day Four
          let dayFourDate = data.daily[4].dt;
          parseInt(dayFourDate);
          let convertDayFourDate = dayFourDate * 1000;
          let updateFourOneDate = new Date(convertDayFourDate);
          let dayFourIcon = data.daily[4].weather[0].icon + ".png";
          let dayFourTemp = data.daily[4].temp.day;
          let dayFourWind = data.daily[4].wind_speed;
          let dayFourHumd = data.daily[4].humidity;

          let dayFourDateDis = document.querySelector(".dayFourDate");
          dayFourDateDis.textContent = updateFourOneDate;
          let dayFourIconDis = document.querySelector(".dayFourIcon");
          dayFourIconDis.setAttribute("src", getWeatherIcon + dayFourIcon);
          let dayFourTempDis = document.querySelector(".dayFourTemp");
          dayFourTempDis.textContent = "temp: " + dayFourTemp;
          let dayFourWindDis = document.querySelector(".dayFourWind");
          dayFourWindDis.textContent = "wind Speed: " + dayFourWind;
          let dayFourHumdDis = document.querySelector(".dayFourHumd");
          dayFourHumdDis.textContent = "humidity: " + dayFourHumd;

          // Day Five
          let dayFiveDate = data.daily[5].dt;
          parseInt(dayFiveDate);
          let convertDayFiveDate = dayFiveDate * 1000;
          let updateFiveOneDate = new Date(convertDayFiveDate);
          let dayFiveIcon = data.daily[5].weather[0].icon + ".png";
          let dayFiveTemp = data.daily[5].temp.day;
          let dayFiveWind = data.daily[5].wind_speed;
          let dayFiveHumd = data.daily[5].humidity;

          let dayFiveDateDis = document.querySelector(".dayFiveDate");
          dayFiveDateDis.textContent = updateFiveOneDate;
          let dayFiveIconDis = document.querySelector(".dayFiveIcon");
          dayFiveIconDis.setAttribute("src", getWeatherIcon + dayFiveIcon);
          let dayFiveTempDis = document.querySelector(".dayFiveTemp");
          dayFiveTempDis.textContent = "temp: " + dayFiveTemp;
          let dayFiveWindDis = document.querySelector(".dayFiveWind");
          dayFiveWindDis.textContent = "wind Speed: " + dayFiveWind;
          let dayFiveHumdDis = document.querySelector(".dayFiveHumd");
          dayFiveHumdDis.textContent = "humidity: " + dayFiveHumd;
        });
    });
});

btnSearchHistory.addEventListener("click", function () {
  searchHistory = JSON.parse(localStorage.getItem("arraySearchHistory"));

  for (let i = 0; i < searchHistory.length; i++) {
    console.log(searchHistory[i]);
    var newItem = document.createElement("button");
    newItem.textContent = searchHistory[i];
    newItem.style.display = "block";
    newItem.setAttribute("id", "#" + i);
    ulSearchResults.appendChild(newItem);
  }
});

var btnSearchChoice = document.querySelector(".search-display");
btnSearchChoice.addEventListener("click", function (e) {
  e.target.matches("click");
  var getText = e.target.textContent;
  document.removeChild(document.documentElement);
  location.reload();
  cityName.textContent = getText;
});

function StoreData() {
  localStorage.setItem("arraySearchHistory", JSON.stringify(searchHistory));
}

function btnSearchClick() {
  // alert("beer");
  // var textInput = document.getElementById("userInput");
  // textInput.textContent = "";
}

// function RetrieveData() {
//   searchHistory = JSON.parse(localStorage.getItem("arraySearchHistory"));
// }
