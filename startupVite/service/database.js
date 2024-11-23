const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('startup');
const userCollection = db.collection('user');
const leaderboardCollection = db.collection('leaderboard');
const notesCollection = db.collection('notes');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({email: email});
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
    // bcrypt hashes the password before it is inserted to protect it from hackers
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(), // generates a unique, random token
    };
    await userCollection.insertOne(user);
    return user;
}

async function updateNotes(userName, notes) {
    const personalNotes = {
        userName: userName,
        notes:  notes,
    };
    await notesCollection.insertOne(personalNotes);
}

async function getNotes(userName) {
    return notesCollection.find({userName: userName}).toArray();
}

async function updateLeaderboard(userName, date) {
    const leaderboardPerson = {
        userName: userName,
        date: date,
    };
    await leaderboardCollection.insertOne(leaderboardPerson);
}

async function getLeaderboard() {
    const query = {};
    const options = {
      sort: { date: 1 },
    };
    const cursor = leaderboardCollection.find(query, options);
    return await cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    updateNotes,
    getNotes,
    updateLeaderboard,
    getLeaderboard,
}