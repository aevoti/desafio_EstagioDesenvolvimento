let locationName = document.querySelector( ".input-location" );
const buttonSearch = document.querySelector( ".search" );
const city = document.querySelector( ".city" );
const country = document.querySelector( ".country" );
const localtime = document.querySelector( ".localtime" );
const weatherIcons = document.querySelector( ".weather-icon" );
const weatherDescriptions = document.querySelector( ".weather-descriptions" );
const temperature = document.querySelector( ".temperature" );
const unitTemperature = document.querySelector( ".unit-temperature" );
const unitTypeTemperature = "°C";
const displayOuthersInfoWeather = document.querySelector( ".section-outhers-infos" )
const windSpeed = document.querySelector( ".wind-speed" );
const unitWindSpeedVisib = document.querySelector( ".unit-wind-speed" );
const unitTypeWindSpeedVisib = "km/h";
const precip = document.querySelector( ".precip" );
const unitPrecip= document.querySelector( ".unit-precip" );
const unitTypePrecip = "mm";
const visibility = document.querySelector( ".visibility" );
const unitVisibility = document.querySelector( ".unit-visibility" );


buttonSearch.addEventListener( "click", ( e ) => {
  e.preventDefault();
  showInfo();
} )

locationName.addEventListener( "keyup", ( e ) => {
  if( e.keyCode === 13 ) {
    e.preventDefault();
    showInfo();
  }
} )

async function getLocation() {
  const key = "b4cb44502321676bb24eae3f06169053";

  const url = "http://api.weatherstack.com/current?access_key=" + key + "&query=" + locationName.value;
  
  const response = await fetch( url );
  const weather = await response.json();

  return weather;
}


function formatDate( localTime ) {
  const date = new Date( localTime );

  return date.toString().substr( 0, 21 );
}

async function showInfo() {
  const weather = await getLocation();
  
  city.innerHTML = weather.location.name + ",";
  country.innerHTML = weather.location.country;
  localtime.innerHTML = formatDate( weather.location.localtime );
  showIconWeather( weather.current.weather_icons );
  weatherDescriptions.innerHTML= weather.current.weather_descriptions[0];
  temperature.innerHTML = weather.current.temperature;
  showOutherInfosWeather();
  unitTemperature.innerHTML = unitTypeTemperature;
  windSpeed.innerHTML = weather.current.wind_speed;
  unitWindSpeedVisib.innerHTML = unitTypeWindSpeedVisib;
  precip.innerHTML = weather.current.precip;
  unitPrecip.innerHTML = unitTypePrecip;
  visibility.innerHTML = weather.current.visibility;
  unitVisibility.innerHTML = unitTypeWindSpeedVisib;
}

function showIconWeather( icon  ) {
  weatherIcons.style.display = "block"
  weatherIcons.setAttribute( "src", icon );
}

function showOutherInfosWeather(  ) {
  displayOuthersInfoWeather.style.display = "block";
}

