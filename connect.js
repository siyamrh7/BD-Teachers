const MongoClient = require('mongodb').MongoClient;

let client = null;

async function connectToDB(databaseName, collectionName) {
  try {
    if (!client) {
      client = new MongoClient("mongodb+srv://siyam:bdteachers@bdteachers.8idyx.mongodb.net/?retryWrites=true&w=majority&appName=BDTeachers",  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Other options at the top level
        poolSize: 10,
        autoReconnect: true,
        // Add any other valid options here
    });
    }

    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection(collectionName);
    return collection;
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
}

module.exports = { connectToDB };
