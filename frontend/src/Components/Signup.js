import React from 'react'
import { useState } from 'react';
import "./Signup.css"



function Signup() {

  const [Password,setPassword] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [PasswordMatchError,setPasswordMatchError] = useState(false);


  function HandleOnSubmit(event){
      event.preventDefault();
    if (Password === confirmPassword){
      setPasswordMatchError(false)
      console.log("Successfully submitted the form")
    }
    else {
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
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  
                <form >
  
                  <div className="form-outline mb-4">
                    <input type="text" id="Username" className="form-control form-control-lg" name = "username"/>
                    <label className="form-label" forhtml="Username">Username</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="email" id="Email" className="form-control form-control-lg"name = "email"/>
                    <label className="form-label" forhtml="Email">Email</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="Password" value = {Password} onChange = {HandlePasswordChange} className="form-control form-control-lg" name = "password" />
                    <label className="form-label" forhtml="Password">Password</label>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="ConfirmPassword" value = {confirmPassword} onChange = {HandleConfirmPasswordChange} className="form-control form-control-lg" name = "confirmpassword"/>
                    <label className="form-label" forhtml="ConfirmPassword">Confirm Password</label>
                  </div>
  
                
                  <div className="d-flex justify-content-center">
                    <button type= "submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={HandleOnSubmit}>Register</button>
                  </div>
                 { PasswordMatchError && <p className="text-center text-muted mt-5 mb-0" > "Passwords did not match. Try again" </p>}
  
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
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

