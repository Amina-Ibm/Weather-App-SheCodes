function dateTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const d = new Date();
    let day = days[d.getDay()];
  
    let dayNow = document.querySelector("#day");
    dayNow.innerHTML = day;
  
    let hour = d.getHours();
    let hourNow = document.querySelector("#hour");
    hourNow.innerHTML = hour;
  
    let minute = d.getMinutes();
    let minuteNow = document.querySelector("#minute");
    minuteNow.innerHTML = minute;
  }
  function updateCity(event) {
    event.preventDefault();
    let city = document.querySelector("#text").value;
    displayCity(city);
  }
  function displayTemp(response) {
    document.querySelector("strong").innerHTML = Math.round(
      response.data.main.temp
    );
    document.getElementById("hum").innerHTML = response.data.main.humidity;
    //document.querySelector("i").innerHTML = response.data.weather.icon;
    document.querySelector("#description").innerHTML =
      response.data.weather[0].description;
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#country").innerHTML = response.data.sys.country;
  }
  function displayCity(city) {
    let apiKey = "64f96a0b2d38108e7c3432831d7cf1ae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }
  function toF(temp) {
    document.querySelector("strong").innerHTML = temp * 1.8 + 32;
  }
  function toC(temp) {
    document.querySelector("strong").innerHTML = temp;
  }
  dateTime();
  
  document.getElementById("fheat").onclick = function () {
    toF(response.data.main.temp);
  };
  let form = document.querySelector("#form");
  form.addEventListener("submit", updateCity);
  document.getElementById("celsius").onclick = function () {
    toC(response.data.main.temp);
  };
  function showCurrentLocation(position) {
    let apiKey = "64f96a0b2d38108e7c3432831d7cf1ae";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
  }
  
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }
  
  let currentButton = document.querySelector(".current");
  currentButton.addEventListener("click", getLocation);
  