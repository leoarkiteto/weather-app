const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=3e2106e237234f65e56149d50f6db7b6&query=37.8267,-122.4233';

request(url, (error, response, body) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
