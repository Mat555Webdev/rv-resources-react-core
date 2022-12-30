import React from "react";
import RvResourcesLogo from "../Images/rvresourceslogo.jpg";

export default function Footer () {
    return (
        <footer className="footer-section">
          <div className="footer-image">
            <img src={RvResourcesLogo} className="footer-logo" alt="rvresources logo"/>
          </div>
          <div className="footer-content--left">
            <p>Home</p>
            <p>Courses</p>
            <p>About</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-content--right">
          <p>Rvresources Ltd.</p>
          <p>7 Roepersfontein Street</p>
          <p>Kimberley, South-Africa, 8301</p>
          <p>(+27) 53 765 9875</p>
          <p>Monday to Friday</p>
          <p>8AM to 5PM</p>
          </div>
          <button className="footer-button">
            <a className="btn-text">Let's Chat</a>
          </button>
        </footer>
    )
}