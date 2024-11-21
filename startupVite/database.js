const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

function getUser(email) {
    return collection.findOne({email: email});
}

const bcrypt = require('bcrypt');
const uuid = require('uuid');
async function createUser(email, password) {
    // bcrypt hashes the password before it is inserted to protect it from hackers
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(), // generates a unique, random token
    };
    return collection.insertOne(user)
}

async function main() {
    const { MongoClient } = require('mongodb');

    const client = new MongoClient(url);
    
    

}

main().catch(console.error);