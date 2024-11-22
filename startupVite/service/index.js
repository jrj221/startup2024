const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js')
const authCookieName = 'token';


const port = process.argv.length > 2 ? process.argv[2] : 8080;

// converts JSON objects into JS objects, stored in req.body
app.use(express.json());

// keeps track of authentication tokens
app.use(cookieParser());

// serves up resources (images, etc) from 'public' to be accessed as "http//domain/img.png" instead of "public/img.png"
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints. A route will be executed with "/api/routeName"
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// helps create a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) { // executes if it is already in the object
      res.status(409).send({ msg: 'Existing user' }); 
    } 
    else { // executes if user is not in the object (user doesn't exist yet)
      const user = await DB.createUser(req.body.email, req.body.password);
      setAuthCookie(res, user.token); // ?? creates cookie to store user info
  
      res.send({ id: user._id}); // ID associated with the database entry
    }
});

// helps login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email); 
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) { //if password is correct
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' }); // triggers if you don't have an account or enter wrong password
});

// helps logout a currently logged in user by clearing their authentication cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => { // some endpoints can now only be accessed if you are logged in
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

//sends leaderboard without updating (render useEffect in leaderboard page)
secureApiRouter.get('/leaderboard', async (_req, res) => {
  const leaderboard = await DB.getLeaderboard();
  res.send(leaderboard);
  // duck recommended having a catch block here *shrug*
});

// updates leaderboard every time someone eliminates target. Eventually should remove that person from the player list
secureApiRouter.post('/updateLeaderboard', (req, res) => {
  DB.updateLeaderboard(req.body.userName, req.body.date); //database.js function to add to database
});

function setAuthCookie(res, authToken) { // middleware?? to make the cookie secure to access.
  res.cookie(authCookieName, authToken, {
    secure: true, // only HTTPS
    httpOnly: true, // browser javascript can't read the cookie
    sameSite: 'strict', // only the domain that generates the cookie can view it
  });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
