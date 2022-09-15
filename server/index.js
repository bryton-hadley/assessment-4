const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCampList, addNewItem } = require('./controller')

app.get("/api/compliment", getCompliment);

//creating the end point for the getFortune using the .get 
app.get("/api/fortune", getFortune);

app.get("/api/camplist", getCampList);
app.post("/api/camplist", addNewItem);
// app.push("/api/camplist/:id", up );
// app.delete("/api/camplist/:id", )


app.listen(4000, () => console.log("Server running on 4000"));
