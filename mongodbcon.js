const { MongoClient } = require('mongodb');

// Connection URL (same as in MongoDB Compass)
const url = "mongodb://localhost:27017"; 
const client = new MongoClient(url);

// Database Name
const dbName = "newbase";

async function connectDB() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Select database
        const db = client.db(dbName);

        // Select collection and insert a document
        const collection = db.collection("customers");
        const result = await collection.insertOne({ name: "Company Inc", address: "Highway 37" });

        console.log("Document inserted with _id:", result.insertedId);
    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the connection function
connectDB();
