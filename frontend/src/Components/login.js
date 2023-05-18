import React, {useState} from 'react'
import './login.css'

export default function Login() {

  const ChangeUserName = (event)=>{
    setUsername(event.target.value) 
}

const ChangePassword = (event)=>{
  setPassword(event.target.value) 
}

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');


  return (<>
  <div id="box">
    <form align='center' text-align='center'>
  <div className="form-group my-3">
    <label >User ID</label>
    <input type="string" autoComplete='off' onChange={ChangeUserName} className="form-control" id="email"/>
  </div>

  <div className="form-group my-3">
    <label >Password</label>
    <input type="password" autoComplete='off' className="form-control" onChange={ChangePassword} id="password"/>
    <i className  ="bi bi-eye-slash" id="togglePassword"></i>
  </div>

  <button type="submit" className="btn btn-primary my-2">Submit</button>

</form>
</div>

<div className="container">
<p>username:{username}</p>
  <p>password:{password}</p>
</div>

</>
  )
}


