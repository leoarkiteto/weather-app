const request = require('postman-request');
require('dotenv').config();

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const WEATHER_KEY = process.env.WEATHER_KEY;
const MAPBOX_KEY = process.env.MAPBOX_KEY;

geocode('Odivelas', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(441545, -75.7088, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
