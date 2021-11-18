const request = require('postman-request');

const WEATHER_KEY = process.env.WEATHER_KEY;

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to weather services!`, undefined);
    } else if (response.body.error) {
      callback('Unable to find location. Try another search!', undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is current ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
