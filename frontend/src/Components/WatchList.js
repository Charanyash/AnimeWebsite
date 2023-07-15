import React, { useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Cards from "./Cards.js";


export default function WatchList() {

  const [WatchList,setWatchList] = useState({});
  const [name , setname] = useState('');
  const YourWatchList = async () =>{
    try{  
      const res = await fetch ("/user/watchlist",{
      method : "GET",
      headers : {
          Accept : "application/json",
          "Content-Type" : "application/json",
      },
      credentials : "include"
    });
    
    const Data = await res.json();

    const {admin,ani_lst_details: ani_array} = Data;

    const name = admin.profile;
    console.log(ani_array);

    setWatchList(ani_array);

    setname(name);
    
    if (res.status !== 200){
      const err = new Error('User is not authorized');
      throw err;
    }

  }
  catch (err){
      console.log(err);
      // navigate("/login");     
  }

 } 

  useEffect(() =>{

      YourWatchList();
  }, [])

  

  return (
    <>
     <div>
   { Object.keys(WatchList).length === 0 ?( <p> The page is loading ......</p>) :
     (<>
       <h2 style={{textAlign : "left",paddingLeft: "2%",paddingTop:"1%"}} >Hi {name}, Your WatchList </h2> 
       <br/>
       <Cards cardlist = { WatchList}> </Cards> 
        
     </>)
  }
    </div>


    </>
  )
}
