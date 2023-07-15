const jwt = require("jsonwebtoken");
const express = require('express');


const Data = require("../model/LoginUserSchema");

const UserProfile = Data.UserProfile;

const User = Data.User;

const secretKey = process.env.SECRET_KEY;


const authUser = async (req, res, next) => {
    try {

      const token = req.cookies.jwtoken;

      const verifyUser = jwt.verify(token,secretKey);
      
      let admin = await UserProfile.findOne({profile : verifyUser.username});

      const admin_cred = await User.findOne({username : verifyUser.username});

      // console.log(admin_cred.password);
      // console.log("2");
      
      const adminWithPassword = {
        ...admin.toObject(),
        password: admin_cred.password
      };

      // console.log(adminWithPassword)
      if (!admin){
          
        const error = new Error("User is Not Authorized");  
        throw error;
     }
      req.token = token;
      req.admin = adminWithPassword;

      // console.log("1");
      // console.log(admin);

      next();


    }
    catch(err){
        // console.log(req.cookies.jwt);
        // console.log(err);
        res.status(401).send("No token found").json();
        // console.log("Inside error");
        return err;
    }

  };
  
  module.exports = authUser;
  