import React, {useState} from 'react'
import { useEffect } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import jwt_decode from 'jwt-decode'
import './Login.css'

export default function Login() {

  const google = window.google;
  function handleCallbackResponse(response){
     console.log("Encoded JWT ID Token" + response.credential)
     var userObject = jwt_decode(response.credential)
     console.log(userObject)
  }

  useEffect(() =>{
    /* Global Google*/
    google.accounts.id.initialize({
      client_id: "631520071880-28m5pb91jkssbnrcg9j2busgi9bq3qc6.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google"),
      {theme: "outline" ,size: "small"}
    );

    // google.accounts.id.prompt();
  },[]);


  const ChangeUserName = (event)=>{
    setUsername(event.target.value) 
}

const ChangePassword = (event)=>{
  setPassword(event.target.value) 
}

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');


  return (<>
  <div className="container" id='heading'><p >Login to YourAnime</p></div>
  <div id="box">
    <form >
  <div className="form-group my-3">
    <label id="uid_label">UserName</label>
    <div className="inp">
    <input type="string" autoComplete='off' onChange={ChangeUserName} className="form-control" id="email"/>
    </div>
  </div>

  <div className="form-group my-3">
    <p id='pwd'>Password</p>
    <a id='fpwd' href="http://google.com">Forgot Password?</a>
    <div className="inp">
    <input type="password" autoComplete='off' className="form-control" onChange={ChangePassword} id="password"/>
    </div>
    <i className  ="bi bi-eye-slash" id="togglePassword"></i>
  </div>

    <div className="inp">
  <button type="submit" className="btn btn-primary" id="submit">Login</button>
  </div>

</form>

<hr />  

<div className="App">
      <div id="google"></div>
    </div>

    <div className="container" id="facebook">
  <LoginSocialFacebook
  appId='263806269376337'
  onResolve={(response) =>{
    console.log(response)
  }}
  onReject={(error) => {
    console.log(error)
  }}
  >
    <div className="container" style={{height:"12.5%",width:"100%"}}>
    <FacebookLoginButton size='small'/>
    </div>
    {/* <div class="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
  </LoginSocialFacebook>
</div>
</div>




<div className="container">
<p>username:{username}</p>
  <p>password:{password}</p>
</div>


<div className="container">

</div>
</>
  )
}