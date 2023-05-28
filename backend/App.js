const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require("express")
const app = express()


dotenv.config({path: './config.env'})

const PORT = process.env.PORT

//This runs the conn.js
require('./db/conn.js')

//This parses JSON automatically
app.use(express.json());

//This include auth.js. auth.js has all the routes/posts/gets
app.use(require('./router/auth.js'))



app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})