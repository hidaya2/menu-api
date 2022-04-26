const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const foodRoutes = require("./routes/foodRoute")
const userRoute = require("./routes/userRoute");


const app = express();

connectDB();
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(foodRoutes)
app.use("/api/users",userRoute);

const PORT = process.env.PORT||9000

//Home route
app.get("/", (req,res)=>{
    res.json("Welcome to My Menu API")
});
app.listen(PORT, ()=>{
console.log("Server is UP!!!")
});