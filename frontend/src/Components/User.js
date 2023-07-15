import React from 'react'
import { Link,Outlet } from 'react-router-dom'
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./UserHeader.css"

export default function User() {
  return (
    <>
    
       <header className='user-header'>
        <div className='user-nav'>
           <Link className='user-nav-link' to = "/user/profile">Profile</Link>
           <Link className='user-nav-link' to = "/user/watch-list">Your WatchList</Link>
        </div>
        <div className="user-icon">
        <span>Username</span> {/* Replace with your user's name or icon */}
         <div className="dropdown">
          <Link className="dropdown-item" to="/user/settings">Settings</Link>
          <Link className="dropdown-item" to="/user/logout">Logout</Link>
        </div>
       </div>
        
        <Outlet/>
    </header>
    
    </>
  )
}
