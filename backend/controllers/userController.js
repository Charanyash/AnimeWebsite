const User = require('../model/LoginUserSchema')

const createUser = (req,res) =>{

    // Logic for creating use
    
    try{

    // Collecting the data from front end
    const {username , email,password , confirmPassword} = req.body;

    const user = new User({username ,email,password});

     user.save();
     res.status(201).send({message : "Created the user succesfully ",username});

    }
    catch(error){
        res.status(500).send({ message: 'Error creating user', error: error.message });

    }
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