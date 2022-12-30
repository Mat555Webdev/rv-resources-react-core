import React from "react"
import PlaceHolder1 from "../Images/placeholder1.jpg";
import PlaceHolder2 from "../Images/placeholder2.jpg";
import PlaceHolder3 from "../Images/placeholder3.jpg";
import PlaceHolder4 from "../Images/placeholder4.png";

export default function About () {
    return (
        <div className="about-section">
          <div className="staff-grid">
            <img 
                className="about-grid" 
                alt="rvresources staff" 
                src={PlaceHolder1}
            />
            <img 
                className="about-grid" 
                alt="rvresources staff" 
                src={PlaceHolder2}
            />
            <img  
                className="about-grid" 
                alt="rvresources staff" 
                src={PlaceHolder3} 
                />
            <img 
                className="about-grid" 
                alt="rvresources staff" 
                src={PlaceHolder4} 
            />
          </div>
        </div>
    )
}