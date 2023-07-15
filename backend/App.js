const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config({path: './config.env'})
const cors = require("cors")
const cookieParser = require('cookie-parser');
//This runs the conn.js
require('./db/conn.js')

const corsOptions = {
    origin : 'http://localhost:3000',
    method : ['GET','POST'],
    optionsSuccessStatus: 200,
    credentials : true
};

const port = process.env.PORT || 5000 ;

// console.log("Hello");

//This parses JSON automatically
app.use(express.json());

app.use(cors(corsOptions))
app.use(cookieParser());

app.use("/api",require("./routes/animeRoutes")) ;

app.use("/user",require("./routes/userRoutes"))

// app.get("/",(req,res)=>{ res.send("Hello World!");})


app.listen(port,() => {
    console.log(`server running on port ${port}`) ;
}) ;



//This include auth.js. auth.js has all the routes/posts/gets
// app.use(require('./router/auth.js'))

