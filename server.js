const express = require("express") ;
const dotenv = require("dotenv").config() ;
const app = express() ;
const cors = require("cors")

const corsOptions = {
    origin : 'https://localhost:3000/',
    method : ['GET','POST'],
    optionsSuccessStatus: 200
};

const port = process.env.PORT || 5000 ;

app.use(cors(corsOptions))

app.use("/api",require("./routes/animeRoutes")) ;

app.use("/create_user",require("./routes/userRoutes"))

// app.get("/",(req,res)=>{ res.send("Hello World!");})


app.listen(port,() => {
    console.log(`server running on port ${port}`) ;
}) ;