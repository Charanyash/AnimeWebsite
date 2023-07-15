const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { Number } = require('mongodb');
const user_cred_Schema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
    },
    email :{
        type : String,
    },
    password: {
        type: String,
        required : true,
    },
    tokens :[
        {
            token : {
             type : String,
          }
        }
        
    ]
    
})

const user_schema = new mongoose.Schema({
   profile :{
        type : String,
   },
   gender :{
         type : String,
   },
   email :{
         type : String,
   },
   birthday:{
         type : String,
   },
   favorites_anime:{
         type : String,
   },
   link :{
        type : String, 
   },
})

const anime_schema = new mongoose.Schema({
    uid : {
         type : String,
    },
    title :{
          type : String,
          required : true,
    },
    synopsis :{
          type : String,
    },
    genre  : {
            type : String,
    },
    aired : {
            type : String,
    },
    episodes :{
            type : String,
    },
    members :{
            type : String,
    },
    popularity :{
            type : String,
    },

    ranked :{
            type : String,
    },

    score :{
            type :  String,
    },

    img_url :{
            type : String,
    },

    link : {
            type : String,
    }
}

)
user_cred_Schema.methods.saveToken = async function (){
    try{
        let new_token = jwt.sign({username : this.username},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : new_token});
        await this.save();
        return new_token;
    }
    catch(err){
        console.log(err);
    }
}

const User = mongoose.model('userdata', user_cred_Schema);

const UserProfile = mongoose.model('user',user_schema);

const Anime = mongoose.model('anime',anime_schema);

module.exports =  {
    User : User,
    UserProfile : UserProfile,
    Anime : Anime
}


