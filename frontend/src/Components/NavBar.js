import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light flex">
      <NavLink >
        <h3 >Home</h3>
      </NavLink>
      <NavLink>
        <h3 >View Profile</h3>
      </NavLink>
      <NavLink >
        <h3 >Logout</h3>
      </NavLink>
    </nav>
  );
}

export default NavBar;
