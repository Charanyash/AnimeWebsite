import React, {useState} from "react";
import NavBar from "./NavBar";
import Genrebar from './Genrebar'
// const cardlist = [{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },]

function TopAnime(){

  const ChangeGenre = (event)=>{
    setGenre(event.target.value)
    if(genre.charAt(genre.length-1)==' '){
      console.log("Last Character is: ",genre.charAt(genre.length-1))
      setGenre(genre.slice(0,genre.length-1))
      ChangeList(genre)
      setGenre('')
      var genresearch = document.getElementById("genre")
      genresearch.value=''
      
    }
}


  const ChangeList = (val)=>{
    setList(genrelist => [...genrelist,val])
    console.log(genrelist)
  }

  const [genrelist,setList] = useState([])
  const [genre,setGenre] = useState('');

    return(
    <>
    <NavBar/>
    <form className="d-flex" role="search">
        <div className="form-group form-inline mb-4 ">
            <label className="form-label" forhtml="genre"><h3>Genre: </h3></label>
            <span>
            <input type="text" id="genre" className="form-control-lg mx-4" name = "username" onChange={(e) => {this.ChangeGenre(e)}}/>
            </span>
            <Genrebar genres={genrelist}/>
        </div>
    </form>
    {/* <Cards cardlist = {cardlist}/> */}
    </>
    );
}

export default TopAnime;

export default TopAnime;