import axios from "axios";

async function getWSData(query) {
  let data = [];

  for (let i = 0; i < query.length; i++) {
    const response = await axios(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_STACK_API_ACCESSKEY}&query=${query[i]}&units=m`
    )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    if (response.success !== false) {
      data.push(response);
    }
  }

  return data;
}

export default getWSData;
