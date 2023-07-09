import React,{useEffect, useState} from "react";
import NavBar from "./NavBar";
import Cards from "./Cards";
import { useParams } from "react-router-dom";
const cardlist2 = [{title:"DemonSlayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..........................................jjjjjjjjjjjjjjjjjjjjjjj.......... -akaza"},{title:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{title:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{title:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{title:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"},{title:"Demon Slayer", url:"https://img.zorores.com/_r/300x400/100/db/2f/db2f3ce7b9cab7fdc160b005bffb899a/db2f3ce7b9cab7fdc160b005bffb899a.png",description:"oni nare ..................................................... -akaza"}]
const cardlist = [{title:"Gintama" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" },{title:"Gintam" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni orewa nar" }]



function Home(){
    const {id} = useParams();
    console.log(id);

    const [data,setData] = useState([]);
    const [data2,setData2] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      useEffect(() => {
        fetchData2();
      }, []);

      const fetchData = async() => {
        try {
            const response = await fetch('your-api-endpoint');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
    const fetchData2 = async() => {
        try {
            const response = await fetch('your-api-endpoint2');
            const jsonData = await response.json();
            setData2(jsonData);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };

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