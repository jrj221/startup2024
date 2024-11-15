const express = require('express');
const app = express();

// just copied simon except startup runs on port 4000
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// converts JSON objects into JS objects, stored in req.body
app.use(express.json());

// serves up resources (images, etc) from 'public' to be accessed as "http//domain/img.png" instead of "public/img.png"
app.use(express.static('public'));

// Router for service endpoints. A route will be executed with "/api/routeName"
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// ENDPOINTS GO HERE
function getWeather() {
    const location = "provo";
    const api_key = "kM8YGj9oKccQcmyNJvd7zDQUsbhxlXka";
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${api_key}&units=imperial`;
    fetch(url, {
        headers: {
            accept: 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data.timelines.hourly[0].values.temperatureApparent))
}

getWeather();
module.exports = getWeather;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
