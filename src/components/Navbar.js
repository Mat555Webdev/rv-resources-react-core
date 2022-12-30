import React from "react"
import ResourcesLogo from "../Images/rvresourceslogo.jpg";

export default function Header() {
    return (
        <header id="header">
          <div className="nav-logo">
            <img
               id="header-logo"
               src={ResourcesLogo} 
               alt="rvresources" 
            />
          </div>
          
          <nav>
            <ul className="nav-links">
                <li>
                <a href="/#home">Home</a>
                </li>
                <li>
                <a href="/#courses" >Courses</a>
                </li>
                <li>
                <a href="/#about">About</a>
                </li>
                <li><a href="#contact">
                Contact Us</a>
                </li>
            </ul>
          </nav>
         </header>
    )
}
