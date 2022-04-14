const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const foodRoute = require("./routes/foodRoutes")


const app = express();

connectDB();
//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(foodRoute)

const PORT = process.env.PORT||9000

//Home route
app.get("/", ()=>{
    res.json("Welcome to My Menu API")
});
app.listen(PORT, ()=>{
console.log("Server is UP!!!")
});