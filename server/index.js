const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, } = require('./controller')

app.get("/api/compliment", getCompliment);

//creating the end point for the getFortune using the .get 
app.get("/api/fortune", getFortune);


//creating the end point for the logIn


app.listen(4000, () => console.log("Server running on 4000"));
