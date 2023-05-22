import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import Cards from './Cards';
import Genre from './Genre';
const cardlist = [{title:"Gintama" ,url:"https://img.zorores.com/_r/300x400/100/5a/2f/5a2f7d0736f223f096c459751f6f0bd6/5a2f7d0736f223f096c459751f6f0bd6.jpg",description:"kaizoku ou ni ore wa naru" }]

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Anime Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">View Profile</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Anime
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Seasonal Anime</a></li>
            <li><a className="dropdown-item" href="#">Top Anime</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Genre</a></li>
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
