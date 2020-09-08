const fetch = require('node-fetch');
// import thu vien node-fetch

const getDataCoronaFromApi = async () => {
  const urlApi = `https://api.covid19api.com/summary`;
  const response = await fetch(urlApi);
  return await response.json();
}

const getDataCoronaFromApiV2 = fetch(`https://api.covid19api.com/summary`);

const showData = () => {
  //getDataCoronaFromApi().then(data => console.log(data));
  //console.log('AAAAAAAA');
  getDataCoronaFromApiV2.then(data => data.json()).then(dt => {
    console.log(dt);
  });
}
showData();
