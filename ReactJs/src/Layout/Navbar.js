import React, { useState } from "react";

import "./navbar.css";

import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const location = useLocation();

  const navigate = useLocation()
  let adminemail = sessionStorage.getItem("userEmail")
  const sesionExpire = ()=>{
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>Ze</span>v<span>oN</span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="active">New Products</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
            </li>           
          </ul>
        </div>
        


        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <li>
              <NavLink to="/add" className={"ml-3 px-2 py-2 rounded-xl text-black hover:text-white hover:bg-teal-700 bg-teal-200"} activeClassName="active">Add</NavLink>
            </li> 
            <li>
            <NavLink to="/allusers" className="ml-3 px-2 py-2 rounded-xl text-white hover:bg-teal-900 bg-teal-700" activeClassName="active">Users</NavLink>
            </li>
            {(adminemail)?
<NavLink onClick={sesionExpire} to="/login"
          className={location.pathname === "/login" ? "active-link" : "ml-3 px-3 py-3 rounded-xl text-black hover:text-white hover:bg-teal-700 bg-teal-200" }>Logout</NavLink>
:
        <div>
          <li>
        <NavLink
          to="/signup"
          className={location.pathname === "/signup" ? "active-link" : "ml-3 px-2 py-2 rounded-xl text-black hover:text-white"}
        >
          SignUp
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/login"
          className={location.pathname === "/login" ? "active-link" : "ml-3 px-2 rounded-xl text-black hover:text-white "}
        >
          LogIn
        </NavLink>
        </li>
        </div>}
          </ul>

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;