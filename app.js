const storage = new Storage();

const weatherLocation = storage.getStorageData();
console.log(weatherLocation);

const weather = new Weather();

const ui = new UI();

document.addEventListener('DOMContentLoaded',loadWeather(weatherLocation.city,weatherLocation.state))

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  loadWeather(city, state)

  storage.setStorageData(city,state)

  $('#locModal').modal('hide')
})

function loadWeather(city, state){
  weather.getWeather(city, state)
    .then((weatherData) => {
      console.log(weatherData)
      ui.paint(weatherData)
    })
    .catch(err => console.log(err));
}
