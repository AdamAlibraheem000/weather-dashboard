// Array to store search history
searchHistory = [];

// variables
var cityName = "";
var cityAPI =
  "api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=6a193b0402d92ad688c98786f9ef7e7f";

var theBeer = document.querySelector(".beer");
theBeer.addEventListener("click", function () {
  cityName = document.getElementById("userInput").value;

  let getCityAPI =
    "api.openweathermap.org/data/2.5/weather?q=dayton&appid=6a193b0402d92ad688c98786f9ef7e7f";

  fetch(getCityAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  // var latLongFetch = fetchLatLong(getCityAPI);
  // console.log(latLongFetch);
});

// function fetchLatLong(getCityAPI) {
//   fetch(getCityAPI).then(function (response) {
//     return response.json();
//   });
// }
