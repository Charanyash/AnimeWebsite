const User = require('../model/LoginUserSchema')

const createUser = (req,res) =>{

    // Logic for creating user.
    // console.log(req.body);
    // res.status(200).send({message : "Connected Sucessfully"});
    const {username , email,password , confirmPassword} = req.body;
    console.log("Username :" ,username);
    res.status(200).send({message : "Hello"});
}
const loginUser = (async (req,res)=>{


    try{
        
        const {username, password} = req.body;
            

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
        

    }catch(err){
        console.log(err)
    }
})

module.exports = {
    createUser,
    loginUser,
};