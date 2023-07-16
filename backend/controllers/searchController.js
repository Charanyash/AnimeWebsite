const Anime = require('../model/SearchSchema')


const SearchbasedonGenre = (async (req,res)=>{

    try{
        
        Anime.find().then((animes)=>{
            
            
            const requiredlist = req.body.tags.map(o => o.text.charAt(0).toUpperCase()+o.text.slice(1))
            const titlelist = []
            const synolist = []
            const imglist = []
            const scorelist = []
            for(let i=0;i<animes.length;i++){
                try{obtainedlist = animes[i].genre.split('\'').slice(0,-1).filter(function (element){
                    return element !==', '
                });
                if(obtainedlist.some(r=> requiredlist.includes(r)) || 
                (req.body.name && (req.body.name.includes(animes[i].title) ||
                animes[i].title.includes(req.body.name)))
                ){
                    titlelist.push(animes[i].title)
                    synolist.push(animes[i].synopsis)
                    imglist.push(animes[i].img_url)
                    // console.log("Just Before danger")
                    scorelist.push(animes[i].score)
                }}catch(err){
                    continue;
                }
            }
            console.log(titlelist.length)
            if(!titlelist){
                res.status(400).json({message:"No Anime Found with Requested Genre"})
            }else{
                res.status(200).json({titles: titlelist,synopsis:synolist,imgs:imglist,scores:scorelist})
            }
        })
        

    }catch(err){
        console.log(err);
    }
})

module.exports = {
SearchbasedonGenre,
};