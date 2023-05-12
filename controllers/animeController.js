//@desc get contacts
// @route GET /api/
// access public

const getAnimes = (req,res) => {
    res.status(200).json({message: `get all animes`}) ;
};

//@desc get contact
// @route GET /api/:id
// access public
const getAnime = (req,res) => {
    res.status(200).json({message: `get anime for id ${req.params.id}`}) ;
};

//@desc update contact
// @route PUT /api/:id
// access public
const updateAnime = (req,res) => {
    res.status(200).json({message: `Update anime for id ${req.params.id}`}) ;
} ;

//@desc delete contact
// @route DELETE /api/:id
// access public
const deleteAnime = (req,res) => {
    res.status(200).json({message: `Delete contact for id ${req.params.id}`}) ;
} ;


module.exports = {getAnimes,getAnime,updateAnime,deleteAnime} ;