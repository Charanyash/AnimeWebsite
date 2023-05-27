import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export default function Login() {


  const navigate =   useNavigate();

  //Google Login Function
  const google = window.google;
  const handleCallbackResponse = async (response)=>{
    //  console.log("Encoded JWT ID Token" + response.credential)
     var userObject = jwt_decode(response.credential)
     console.log(userObject.email)

     const gmail = userObject.email

     setMode("google")
     const res = await fetch("https://localhost:5000/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        gmail,mode
      })
    });
    const data = await res.json();

    if(res.status===400 || !data){
      window.alert(res.error)
    }
    else{
      navigate("/home")
    }

  }

  useEffect(() =>{
    /* Global Google*/
    google.accounts.id.initialize({
      client_id: "631520071880-28m5pb91jkssbnrcg9j2busgi9bq3qc6.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google"),
      {theme: "outline" ,size: "larger"}
    );
  },[]);


  const ChangeUserName = (event)=>{
    setUsername(event.target.value) 
}

  const ChangePassword = (event)=>{
  setPassword(event.target.value) 
}

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [mode,setMode] = useState("normal")

  const LoginPostData = async (e)=>{
    e.preventDefault()


    const res = await fetch("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,password,mode
      })
    });
    const data = await res.json();

    if(res.status===400 || !data){
      window.alert(res.error)
    }
    else{
      navigate("/home")
    }
  }

  return (
  <>
  <section className="vh-100 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style= {{borderRadius: "15px"}}>
              <div className="card-body p-5">
                <h2 className="text-center mb-5">Login to your Account</h2>
  
                <form method="POST">
  
                  <div className="form-outline mb-4">
                  <label className="form-label" forhtml="Username">Username</label>
                    <input type="text" id="Username" className="form-control form-control-lg" name = "username" onChange={ChangeUserName}/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" forhtml="Password">Password</label>
                    <input type="password" id="Password" value = {password} onChange = {ChangePassword} className="form-control form-control-lg" name = "password" />
                  </div>
  
                
                  <div className="d-flex justify-content-center">
                    <button type= "submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={LoginPostData}>Login</button>
                  </div>
                 
                  <hr />
                  <h6 className="text-center mb-2">Other Login Options</h6>


                  <div className="form-outline">
                    <div id="google" className='align-items-center'></div>
                  </div>
                  
                  <p className="text-center text-muted mt-4 mb-0">Don't have an account? <a 
                      className="fw-bold text-body" href="/SignUp"><u>SignUp here</u></a></p>
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}


