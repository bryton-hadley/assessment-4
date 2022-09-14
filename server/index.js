const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCampList, addCampItem } = require('./controller')

app.get("/api/compliment", getCompliment);

//creating the end point for the getFortune using the .get 
app.get("/api/fortune", getFortune);

app.post("/api/camplist", addCampItem);



app.listen(4000, () => console.log("Server running on 4000"));
