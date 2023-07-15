import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';

import "./Profile.css";

function Profile() {
const [loading,setLoading] = useState(true);
const [userData,setUserData] = useState({});
const [showpassword, setshowpassword] = useState(false);

const navigate = new useNavigate();
 const HandlePassword = async (e) =>{
    e.preventDefault();
    setshowpassword(!showpassword);
 }
 const CheckUser = async () =>{
    try{  
      const res = await fetch ("/user/profile",{

      method : "GET",
      headers : {
          Accept : "application/json",
          "Content-Type" : "application/json",
      },
      credentials : "include"
      // 'withCredentials' :true
    });
    
    const Data = await res.json();
    console.log(Data);
    setUserData(Data);
    setLoading(false);
    if (res.status !== 200){
      const err = new Error('User is not authorized');
      throw err;
    }

  }
  catch (err){
      console.log(err);
      navigate("/login");
      
  }

 } 

  useEffect(() =>{
      CheckUser();
  }, [])

  
  return (
  
    <div>
      {loading ? (<h3 style = {{textAlign : "center"}}> Page is loading .....</h3>) :
     ( <form method='GET'>
      <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Username">Username</label>
                    <input type="text" id="Username" style = {{fontsize : "12px"}}className="form-control form-control-lg" value = {userData.profile} name = "username" />
                    
                  </div>
      <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="DateOfBirth">Date Of Birth </label>
                    <input type="text" id="DateOfBirth" style = {{fontsize : "12px"}}className="form-control form-control-lg" value = {userData.birthday} name = "DateOfBirth"  />
                    
                  </div>
       <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Gender"> Gender </label>
                    <input type="text" id="Gender" style = {{fontsize : "12px"}}className="form-control form-control-lg" value = {userData.gender} name = "Gender" />
                    
                  </div>
                 <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Password"> Your Password </label>
                    <input type="text" id="password" style = {{fontsize : "12px"}} className="form-control form-control-lg" value = {showpassword ? userData.password : "**********"} name = "password" />
                  <button  onClick={HandlePassword} >{!showpassword ? "Show Password" :"Hide Password" }</button>
                  </div>
      
      </form>
     )}
    </div>
  )
}

export default Profile
