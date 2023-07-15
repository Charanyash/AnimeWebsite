import React from 'react'
import { useState } from 'react';
import "./Signup.css"
import {Link, useNavigate} from 'react-router-dom'


function Signup() {
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [FormError,SetFormError] = useState(
    {
      PasswordError : false,
      RequiredFieldError : false,
      ValidEmailError :false
}
  );

  function HandleOnSubmit(event){
    event.preventDefault(); 

    if (!formData.password || !formData.confirmPassword || !formData.username || !formData.email){
        SetFormError((FormError) => ({...FormError,RequiredFieldError : true}));
      return;
    }
    else SetFormError((FormError) => ({...FormError,RequiredFieldError:false}));

    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email_regex.test(formData.email)){
      SetFormError((FormError) => ({...FormError,ValidEmailError : true}));
      return;
    }
    else  {
      SetFormError((FormError) => ({...FormError,ValidEmailError : false}));
    }

    if (formData.password !== formData.confirmPassword){
      SetFormError((FormError) => ({...FormError,PasswordError: true}));

    }
      
    else {
      SetFormError((FormError) => ({...FormError,PasswordError:false}));
      
      // console.log("Inside equality");
      // console.log(JSON.stringify(formData));

      fetch("http://localhost:5000/user/create",{
         method : 'POST',
         headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      })
      .then((response) => {
        if (response.status ===201)

        return response.json();
        else {
          throw new Error('Error: ' + response.status);
        }
      })
      
      .then((data) => {
        // Handle the response from the backend
        navigate("/home");
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

    }
   
  
  }
  function HandleInputChange(event){
      setFormData((formData) => ({...formData,[event.target.name] : event.target.value}));
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
                    <input type="text" id="Username" style = {{fontsize : "12px"}}className="form-control form-control-lg" value = {formData.username} name = "username" onChange = {HandleInputChange} required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="Email">Email</label>
                    <input type="email" id="Email" className="form-control form-control-lg"name = "email" value = {formData.email} onChange={HandleInputChange}
                    required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="Password">Password</label>
                    <input type="password" id="Password" value = {formData.password} onChange = {HandleInputChange} className="form-control form-control-lg" name = "password" required/>
                    
                  </div>
  
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" id="ConfirmPassword" value = {formData.confirmPassword} onChange = {HandleInputChange} className="form-control form-control-lg" name = "confirmPassword" required/>
                   
                  </div>
  
                
                  <div className="d-flex justify-content-center">
                    <button type= "submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={HandleOnSubmit}>Register</button>
                  </div>
                  {FormError.ValidEmailError ? (<p className="text-center mt-2 mb-0" style = {{color : "red"}}> Please enter the valid email address </p>) : null}
                  {FormError.RequiredFieldError && <p className="text-center mt-2 mb-0" style = {{color : "red"}}> Please fill all the fields to register. </p>}
                 {FormError.PasswordError && <p className="text-center mt-2 mb-0" style = {{color : "red"}}> Passwords did not match. Try again </p>}
  
                  <p className="text-center text-muted mt-3 mb-0">Have already an account? <Link to="/login"
                      className="fw-bold text-body"><u>Login here</u></Link></p>
  
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

