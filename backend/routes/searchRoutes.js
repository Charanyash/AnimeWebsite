const express = require("express") ;

const router = express.Router() ;

const SearchController = require("../controllers/searchController") ;

router.post("/searchgenre",SearchController.SearchbasedonGenre);


module.exports = router ;