const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, } = require('./controller')

app.get("/api/compliment", getCompliment);

//creating the end point for the getFortune using the .get 
app.get("/api/fortune", getFortune);

app.delete('/api/delete')

//creating the end point for the logIn
// app.get("/api/login", getLogin);

// app.get("/api/dropDown", getDropDwn);

app.listen(4000, () => console.log("Server running on 4000"));
