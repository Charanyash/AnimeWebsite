import React from 'react'
import { useState } from 'react';
import "./Signup.css"



function Signup() {

  const [Password,setPassword] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [PasswordMatchError,setPasswordMatchError] = useState(false);


  function HandleOnSubmit(event){
      
    if (Password === confirmPassword){
      setPasswordMatchError(false)
      
      console.log("Successfully submitted the form")
    }
    else {
      event.preventDefault();
      setPasswordMatchError(true);

    }
  
  }
  function HandleConfirmPasswordChange(event){
    setconfirmPassword(event.target.value);
 
  }
  function HandlePasswordChange(event){
    setPassword(event.target.value);
 
  }

  return (
    <>
    <section className="vh-100 bg-image"
    // style={ { 
    //   backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
    //   } } 
    >
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style= {{borderRadius: "15px"}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-3">Create an account</h2>
  
                <form method = "POST">
  
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Username">Username</label>
                    <input type="text" id="Username" style = {{fontsize : "12px"}}className="form-control form-control-lg" name = "username" required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="Email">Email</label>
                    <input type="email" id="Email" className="form-control form-control-lg"name = "email" required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="Password">Password</label>
                    <input type="password" id="Password" value = {Password} onChange = {HandlePasswordChange} className="form-control form-control-lg" name = "password" required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" id="ConfirmPassword" value = {confirmPassword} onChange = {HandleConfirmPasswordChange} className="form-control form-control-lg" name = "confirmpassword" required/>
                   
                  </div>
  
                
                  <div className="d-flex justify-content-center">
                    <button type= "submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={HandleOnSubmit}>Register</button>
                  </div>
                 { PasswordMatchError && <p className="text-center mt-2 mb-0" style = {{color : "red"}}> Passwords did not match. Try again </p>}
  
                  <p className="text-center text-muted mt-3 mb-0">Have already an account? <a href="#!"
                      className="fw-bold text-body"><u>Login here</u></a></p>
  
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

export default Signup

