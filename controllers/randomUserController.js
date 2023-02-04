const { ObjectId } = require("mongodb")
const { run, client } = require("../connectionToDb/dbConnect");

const db = client.db("test");
const collection = db.collection("randomUser");


//return all users
const findAllUsers = async(req, res) => {
    
    const searchQuery = {};
    //using Object.entries to get an array of key/value pairs representing the req.query then the array is used in the for of loop to iterate through each property of the req.query object. In each iteration, the loop destructures the current key/value pair into key and value variables which are then used to check if the value is truthy, if it is, it is added to the searchQuery object with the same name as the current property and the same value as the same value 
    for(let [key, value] of Object.entries(req.query)) {
        if (value) searchQuery[key] = value;
    }
    
    
    const findUsers = await collection.find(searchQuery).toArray();
    res.status(200).json({message: "Here you go!", data: findUsers});

};


//find user by id
const findUserById = async(req, res) => {
    const id  = req.params.id;
    const filter = { _id: ObjectId(id) };
    const findUsersById = await collection.find(filter).toArray();
    
    res.status(200).json({message: findUsersById});
}

module.exports = {
    findAllUsers,
    findUserById
}