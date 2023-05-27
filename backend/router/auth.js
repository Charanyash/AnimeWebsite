const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

require('../db/conn')
const User = require('../model/LoginUserSchema')

router.post('/', (req, res) => {
    console.log(req.body.username);
    res.json({ message: req.body });
});


router.post('/login',async (req,res)=>{


    try{
        
        const {username, password, email, mode} = req.body;

        if(mode==="normal"){
            

            if(!username || !password){
                return res.status(400).json({error:"Empty Fields"})
            }

            const UserLogin = await User.findOne({username:username})

            const isMatch = password===UserLogin.password

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"})
            }else{
                res.json({message: "Signin Successful"})
            }
        }

        else if(mode==="google"){

            const {email} = req.body;

            const UserLogin = await User.findOne({email: email})

            
            console.log("in auth.js",UserLogin)
            if(!UserLogin){
                res.status(400).json({error: "Invalid Credentials"})
            }else{
                res.json({message: "Signin Successful"})
            }

        }

    }catch(err){
        console.log(err)
    }
})




module.exports = router;