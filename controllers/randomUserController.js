const { run, client } = require("../connectionToDb/dbConnect");

const db = client.db("randomUserDb");
const collection = db.collection("randomUser");


//return all users
const findAllUsers = async(req, res) => {
    
    
    const findUsers = await collection.find({firstName: "Claudia"}).toArray();
    res.json({message: "Here you go!", data: findUsers});

};


//find user by id
const findUserById = async(req, res) => {
    //const { id } = req.params;
    const findUsersById = await collection.findOne({ id : req.params.id });
    console.log(req.params.id);
    console.log(findUsersById);
    res.json({message: findUsersById});
}

module.exports = {
    findAllUsers,
    findUserById
}