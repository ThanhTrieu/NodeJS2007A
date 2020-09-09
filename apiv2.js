const axios = require('axios');
const getDataWeatherFromApi= async (city = 'Tokyo') => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi`;
  const response = await axios.get(url);
  const data = await response.status === 200 ? response.data : [];
  return data;
}
const main = async () => {
  const data = await getDataWeatherFromApi('HaNoi');
  
  console.log(data);
}
main();