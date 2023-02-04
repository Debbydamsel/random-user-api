const { ObjectId } = require("mongodb")
const { run, client, closeDbConnection } = require("../connectionToDb/dbConnect");

const db = client.db("test");
const collection = db.collection("randomUser");


//return all users
const findAllUsers = async(req, res) => {
    await run();
    const searchQuery = {};
    for(let [key, value] of Object.entries(req.query)) {
        if (value) searchQuery[key] = value;
    }
    const findUsers = await collection.find(searchQuery).toArray();
    res.status(200).json({message: "Here you go!", data: findUsers});
    closeDbConnection();

};


//find user by id
const findUserById = async(req, res) => {
    await run();
    const id  = req.params.id;
    const filter = { _id: ObjectId(id) };
    const findUsersById = await collection.find(filter).toArray(); 
    res.status(200).json({message: findUsersById});
    closeDbConnection();
}

module.exports = {
    findAllUsers,
    findUserById
}