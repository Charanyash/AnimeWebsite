const express = require("express") ;

const router = express.Router() ;

const UserController = require("../controllers/userController") ;

const AuthUser = require("../controllers/authMiddleware");

router.post("/create",UserController.createUser);

router.get("/profile",AuthUser,UserController.getProfileUser);

router.get("/watchlist",AuthUser,UserController.getWatchList);

router.post('/login',UserController.loginUser);



module.exports = router ;