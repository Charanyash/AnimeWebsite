const data = require('../model/LoginUserSchema');

const User = data.User;
const UserProfile = data.UserProfile

const Anime = data.Anime;


const createUser = (req,res) =>{

    // Logic for creating use
    
    try{

    // Collecting the data from front end
    const {username , email,password , confirmPassword} = req.body;

    const user = new User({username ,email,password});
    const user_profile = new UserProfile({profile : username,email : email});
     user.save();
     user_profile.save();
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
                res.status(401).json({error: "Invalid Credentials"})
            }
            else{
                const token = await UserLogin.saveToken();

                res.cookie('jwtoken',token,{httpOnly : true,expires : new Date(Date.now() + 24*60*60*1000)});
                
                // console.log({token});
                res.json({message: "Login in Successful"})
                
            }
        

    }catch(err){
        console.log(err)
    }
})

const getProfileUser = (req,res) =>{

    res.send(req.admin);
    
}

const getWatchList = async (req,res) =>{
    const admin = req.admin;

    let ani_lst = admin.favorites_anime;

    console.log(admin);
    
    ani_lst = eval(ani_lst);

    const ani_lst_details = [];

    for (let i = 0; i < ani_lst.length;i++){
        let queryResult = await Anime.findOne({uid : ani_lst[i]},'title synopsis img_url');

        if (queryResult)ani_lst_details.push(queryResult);

    }
    const combined_obj = {admin,ani_lst_details}
    res.send(combined_obj);

}

module.exports = {
    createUser,
    loginUser,
    getProfileUser,
    getWatchList,
};