//USING MONGODB DRIVER TO CONNECT TO MONGODB
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const mongodb_connection_url = process.env.MONGODB_CONNECTION_URL;
let client = new MongoClient(mongodb_connection_url);


//MongoClient.connect(mongodb_connection_url, { useNewUrlParser: true, useUnifiedTopology: true })

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected to mongodb successfully!");
 } finally {
        //await client.close();
}
}


module.exports = {run, client};




