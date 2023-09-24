const key = "be6555174e0ca47ff185b02ce06c1c77";
const btn = document.querySelector(".inputs button");
const input = document.querySelector(".inputs input");
const temprature = document.querySelector(".temp h2");
const wind = document.querySelector(".others .wind p span");
const humidityRate = document.querySelector(".others .humidity p span");
const cityName = document.querySelector(".temp .city");
const logo = document.querySelector(".logo");
const weatherLogo = document.querySelector(".logo img");
btn.addEventListener("click", checkWeather);

async function checkWeather() {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`;
  let res = await fetch(api);
  let data = await res.json();

  if (data.cod == "404" || input.value == "") {
    alert("Invalid City or Country");
  } else {
    console.log(data);
    let temp = data.main.temp - 273.15;
    let windSpeed = data.wind.speed;
    let humidity = data.main.humidity;

    temprature.innerHTML = Math.round(temp) + "°C";
    wind.innerHTML = windSpeed + " km/h";
    humidityRate.innerHTML = humidity + " %";
    cityName.innerHTML = data.name;
    logo.style = "display:block;";
    console.log(data.weather[0].main);
    if (data.weather[0].main == "Rain") {
      weatherLogo.src = "img/Rain.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherLogo.src = "img/Cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherLogo.src = "img/Clear.jfif";
    } else if (data.weather[0].main == "Mist") {
      weatherLogo.src = "img/Mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherLogo.src = "img/Drizzle.png";
    }
  }
}
