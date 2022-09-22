const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCampList, addNewItem, editCampItem, deleteItem } = require('./controller')

app.get("/api/compliment", getCompliment);

//creating the end point for the getFortune using the .get 
app.get("/api/fortune", getFortune);

//creating end piont for .get method to get the cmaplsit 
app.get("/api/camplist", getCampList);

//creating a post end point using the .post method 
app.post("/api/addCamplist", addNewItem);

//creating an edit end point using the .put method
app.put("/api/postCamplist/:id", editCampItem )

//creating a delete endpoint using the .delete method
app.delete("/api/deleteCamplist/:id", deleteItem)


app.listen(4000, () => console.log("Server running on 4000"));
