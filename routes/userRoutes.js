const express = require("express") ;

const router = express.Router() ;

const {createUser} = require("../controllers/userController") ;

router.route("/create_user",createUser);

module.exports = router ;