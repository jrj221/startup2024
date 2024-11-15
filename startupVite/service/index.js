const express = require('express');
const app = express();
const uuid = require('uuid');

users = {} // empty storage for users

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
apiRouter.get('/getWeather', (_req, res) => {
    const location = "provo";
    const api_key = "kM8YGj9oKccQcmyNJvd7zDQUsbhxlXka";
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${api_key}&units=imperial`;
    fetch(url, {
        headers: {
            accept: 'application/json',
        }
    })
    .then(response => {
        if (response.status === 429) {
            // Handle rate limit scenario
            const dummyTemperature = 'tooMany';
            return res.send(dummyTemperature.toString());
        }
        return response.json()}
    )
    .then(data => {
        let temperature = data.timelines.hourly[0].values.temperatureApparent;
        let roundedTemperature = Math.round(temperature); // Round the number
        res.send(roundedTemperature.toString())}
    )
    .catch(error => {
        console.error('Fetch error:', error);
        res.status(500).send('Internal Server Error');
    });
});

// helps create a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email]; // either returns the value of the user key in the users object, or null, if its not in the object
    if (user) { // executes if it is already in the object
      res.status(409).send({ msg: 'Existing user' }); 
    } else { // executes if user is not in the object (user doesn't exist yet)
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
});

// helps login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) { //if password is correct, assign and send a authentication token
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' }); // triggers if you don't have an account or enter wrong password
});

// helps logout a currently logged in user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token); // iterates over users to find user based on their token
    if (user) {
      delete user.token;
    }
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
