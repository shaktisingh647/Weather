const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBTN"); 
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationMsg = document.querySelector(".location");
const weatherbody = document.querySelector(".weather-body");


async function checkWeather(city)
{
  const api_key="38484bae22cbaceed38cbbf07b7a2840"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather= await fetch(`${url}`).then(Response=>Response.json());
  if(weather.cod===`404`){
    locationMsg.style.display = "flex";
    weatherbody.style.display = "none";
    return;
  }
  locationMsg.style.display = "none";
    weatherbody.style.display = "flex";


  temperature.innerHTML = `${Math.floor(weather.main.temp-273.15)}°C`
  description.innerHTML=`${weather.weather[0].description}`
  humidity.innerHTML = `${weather.main.humidity}%`
  windSpeed.innerHTML = `${weather.wind.speed}km/h`
  switch(weather.weather[0].main)
  {
   case 'Clouds': 
   weather_img.src="asset/cloud.png";
   break;
   case 'Clear': 
   weather_img.src="asset/clear.png";
   break;
   case 'Rain': 
   weather_img.src="asset/rain.png";
   break;
   case 'Mist': 
   weather_img.src="asset/mist.png";
   break;
   case 'Snow': 
   weather_img.src="asset/snow.png";
   break;
  }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
})