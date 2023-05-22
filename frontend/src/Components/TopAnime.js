import React from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
const cardlist = [{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },{title:"Black Clover" ,url:"https://img.zorores.com/_r/300x400/100/f5/8b/f58b0204c20ae3310f65ae7b8cb9987e/f58b0204c20ae3310f65ae7b8cb9987e.jpg",description:"genkai wa koero" },]

function TopAnime(){
    return(
    <>
    <NavBar/>
    <Cards cardlist = {cardlist}/>
    </>
    );
}

export default TopAnime;