const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

async function main() {
    const { MongoClient } = require('mongodb');

    const client = new MongoClient(url);
    


}

main().catch(console.error);