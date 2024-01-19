const {MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function run() {
  try {
    const db = client.db("fruitsDB");
    const fruits = db.collection("fruits");

    // query find data by objectId
    const query = { "_id": new ObjectId("65a90a65bc1d365fc6a07d73") }

    // Execute query
    const cursor = fruits.find(query);

    console.log("Connected to the server.");
    // Print returned documents
    for await (const doc of cursor) {
      console.dir(JSON.stringify(doc));
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);