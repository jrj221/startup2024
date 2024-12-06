const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

async function listDatabases(uri) {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const databases = await client.db().admin().listDatabases();
      console.log('Databases:');
      databases.databases.forEach(db => console.log(`- ${db.name}`));
    } finally {
      await client.close();
    }
}

async function listCollections(uri, dbName) {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collections = await db.collections();
      console.log('Collections:');
      collections.forEach(col => console.log(`- ${col.collectionName}`));
    } finally {
      await client.close();
    }
}

async function listDocuments(uri, dbName, collectionName) {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Find all documents in the collection
      const documents = await collection.find({}).toArray();
      console.log('Documents:');
      documents.forEach(doc => console.log(doc));
    } finally {
      await client.close();
    }
}  

async function clearCollection(uri, dbName, collectionName) {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      await collection.deleteMany({});
      console.log(`Cleared collection: ${collectionName}`);
    } finally {
      await client.close();
    }
}

listDocuments(uri, 'startup', 'user');