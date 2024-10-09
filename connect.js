const MongoClient = require('mongodb').MongoClient;

let client = null;

async function connectToDB(databaseName, collectionName) {
  try {
    if (!client) {
      client = new MongoClient("mongodb+srv://siyam:siyam@cluster0.n6bi6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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
