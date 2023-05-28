const createUser = (req,res) =>{

    // Logic for creating user.
    // console.log(req.body);
    // res.status(200).send({message : "Connected Sucessfully"});
    const {username , email,password , confirmPassword} = req.body;
    console.log("Username :" ,username);
    res.status(200).send({message : "Hello"});
}

module.exports = {
    createUser
};