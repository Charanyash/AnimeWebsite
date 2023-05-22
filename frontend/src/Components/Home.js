import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";

function Home(){
    <>
    <NavBar/>
    <h2>Top Anime</h2>
    <Cards cardlist ={cardlist}/>
    </>
}

export default Home;