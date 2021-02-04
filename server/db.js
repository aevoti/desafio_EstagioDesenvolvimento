const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DB_URI, { useUnifiedTopology: true });

function run() {
    return new Promise(async resolve => {
        client.connect();

        const db = client.db('test');
        const collection = db.collection('teste')
        
        resolve(collection);
    })
}

async function insert(docs, callback) {
    const collection = await run();
    await collection.insertOne(docs, callback);
}

async function find(callback) {
    const collection = await run();
    const cursor = await collection.find({});

    await cursor.toArray(callback)
}

async function deleteOne(filter, callback) {
    const collection = await run();
    await collection.deleteOne({ _id: new ObjectId(filter)}, callback);
}
module.exports = { insert, find, deleteOne };