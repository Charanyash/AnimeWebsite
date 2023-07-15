import React from 'react'
import {Outlet,NavLink, Link } from 'react-router-dom'
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./UserHeader.css"

const UserHeader = () =>{
  return (
    <>   
  <header className="user-header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/user/profile">
        Anime Website
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/user/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/user/watchlist">
                Your WatchList
              </NavLink>
            </li>

          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to ="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      </div> 
      </div>
    </header>
 
 </>
)

;
}
export default function User() {
  return (
        <div>
          <UserHeader/>
          <div className='user -content'>
            <Outlet/>
          </div>
        </div>
  )
   
}
