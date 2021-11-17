const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=3e2106e237234f65e56149d50f6db7b6&query=37.8267,-122.4233&units=m';

request({ url, json: true }, (error, response, body) => {
  console.log(
    `${body.current.weather_descriptions[0]}. It is current ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain`
  );
});

// Geocoding
// Address -> Lat/Long -> Weather
const geocodingURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGVvYXJraXRldG8iLCJhIjoiY2t3M3FoOWE4MHJ4cjJvcDZrN3AwdTNwdyJ9.RBjSpdmWZa_cW8exkwb_wg&limit=1';

request({ url: geocodingURL, json: true }, (error, response, body) => {
  const [longitude, latitude] = body.features[0].center;
  console.log(longitude, latitude);
});
