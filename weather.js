class Weather {
    constructor(){
      this.apiKey = 'b34e19b83cb2eda5fd72fb8da2c4b6d3'
      this.units = 'm'
    }
  
    getURL (city, state) {
      return `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${city},${state}&units=${this.units}`
    }
  
    async getWeather (city, state) {
      const weatherResponse = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${city},${state}&units=${this.units}`);
  
      const weatherData = await weatherResponse.json();
  
      return weatherData;
    }
  }