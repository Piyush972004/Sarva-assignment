const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const activityRoutes = require("./routes/activityRoutes");

require("dotenv").config();


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/activity", activityRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database Connected"))
.catch(()=>console.log("Error connecting DB"));


/* VERY IMPORTANT */
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
res.send("Backend running successfully");
});

app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`);
});


app.use((err,req,res,next)=>{
console.error(err);

res.status(500).json({
message:"Server Error"
});
});