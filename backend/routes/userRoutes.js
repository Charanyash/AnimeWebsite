const express = require("express") ;

const router = express.Router() ;

const UserController = require("../controllers/userController") ;

router.post("/create",UserController.createUser);


const jwt = require('jsonwebtoken');
// router.post('/', (req, res) => {
//     console.log(req.body.username);
//     res.json({ message: req.body });
// });


router.post('/login',UserController.loginUser)



module.exports = router ;