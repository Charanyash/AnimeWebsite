import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
const cardlist2 = [{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{tilte:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"}]
const cardlist = [{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" }]

function Home(){
    return (
    <>
    <NavBar/>
    <h2>Seasonal Anime</h2>
    <Cards cardlist ={cardlist2}/>
    <h2>Top Anime</h2>
    <Cards cardlist ={cardlist}/>
    </>
    );
}

export default Home;