import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const cardlist = [{title:"Gintama" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni ore wa naru" }]

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Anime Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
      
        <li className="nav-item">
          <Link className="nav-link" to ="/user/profile">View Profile</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to ="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Anime
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Seasonal Anime</Link></li>
            <li><Link className="dropdown-item" to="/topanime">Top Anime</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to ="#">Genre</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Profile Name</a>
        </li>
      </ul>
    </div>
</div>
</nav>
<div>
<form className="d-flex" role="search">
        <input className="form-control  form-control-lg me-1" type="search" placeholder="               Search          " aria-label="Search" style={{margin: "1%",width : "60%"}}/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
</div>
    </>
  );
}

export default NavBar;
