const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const randomUserRoute = require("./routes/randomUserRoute");
let { run } = require("./connectionToDb/dbConnect");
const fileUploadRouter = require("./routes/fileUploadRoute");


//connection to mongodb through mongodb client
run().catch(console.dir);

app.use("/file", fileUploadRouter)
app.use("/random-user", randomUserRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})