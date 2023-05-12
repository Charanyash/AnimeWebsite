const express = require("express") ;
const router = express.Router() ;
const {getAnimes,getAnime,updateAnime,deleteAnime} = require("../controllers/animeController") ;

router.route("/").get (getAnimes);

router.route("/:id").get (getAnime).put (updateAnime).delete(deleteAnime)  ;



module.exports = router ;