const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once ("open" , () => {
    console.log("Mongodb Connection success!");
})


 /* To connect or create database */
 
// mongoose.connect(URL, { 
//     useUnifiedTopology : true, 
//     useNewUrlParser : true , 
// }).then(() => {
//     console.log("Connection successfull");
//  }).catch((e) => console.log("No connection"))

const studentRouter = require("./routes/students.js"); // to get the acces of the students.js file in the routes ---------------

// http://localhost:8070/student

app.use("/student",studentRouter); // http://localhost:8070/student ----> inside routes folder students.js file excuted 

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})

