// Array to store search history
searchHistory = [];

// variables
var cityName = "";

var theBeer = document.querySelector(".beer");
theBeer.addEventListener("click", function () {
  cityName = document.getElementById("userInput").value;
  let lat = "";
  let lon = "";

  // Acquire city lat & longitude

  let getCityAPI =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=6a193b0402d92ad688c98786f9ef7e7f";

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
          var uv = data.current.uvi;
          console.log(uv);
        });
    });

  // cityLatLon =
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  //   lat +
  //   "&lon=" +
  //   lon +
  //   "&appid=6a193b0402d92ad688c98786f9ef7e7f";

  // fetch(cityLatLon)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (newData) {
  //     var uv = newData.uvi;
  //     console.log(uv);
  //   });
});

// https://api.openweathermap.org/data/2.5/onecall?lat=41.85&lon=-87.65&appid=6a193b0402d92ad688c98786f9ef7e7f
