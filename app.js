const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=3e2106e237234f65e56149d50f6db7b6&query=37.8267,-122.4233&units=m';

request({ url, json: true }, (error, response, body) => {
  // console.log(body.current);
  console.log(
    `It is current ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain`
  );
});
