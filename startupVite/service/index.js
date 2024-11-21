const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js')


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


//sends leaderboard without updating (render useEffect in leaderboard page)
apiRouter.get('/leaderboard', (_req, res) => {
    res.send(leaderboard);
 });

// updates leaderboard every time someone eliminates target. Eventually should remove that person from the player list
apiRouter.post('/updateLeaderboard', (req, res) => {
    let newPosition = req.body;
    leaderboard.push(newPosition);
    res.send(leaderboard);
});

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

function setAuthCookie(res, authToken) { // middleware?? to make the cookie secure to access.
  res.cookie('token', authToken, {
    secure: true, // only HTTPS
    httpOnly: true, // browser javascript can't read the cookie
    sameSite: 'strict', // only the domain that generates the cookie can view it
  });
}

// helps login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await getUser(req.body.email); // why don't we need DB. here like we do in /create ?
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) { //if password is correct
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' }); // triggers if you don't have an account or enter wrong password
});

app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({token: authToken});
  if (user) {
    res.send({email: user.email});
    return;
  }
  res.status(401).send({msg: 'Unauthorized'});
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
