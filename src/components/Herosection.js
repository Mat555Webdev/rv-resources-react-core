import React from "react";
import PlaceHolderImg from "../Images/placeholderimg.jpg";

export default function Herosection() {
    return (
        <section id="courses" className="courses-section">
           <h2 className="courses-heading">Here are some of the courses we offer</h2>
           
           <div className="courses-grid">
             <a
                href="#firstcourse"
                target="_blank"
                className="link courses-tile"
             >
               <img
                  className="course-image"
                  src={PlaceHolderImg}
                  alt="welding student" 
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
            <a
              href="#Secondsourcelink"
              target="_blank" 
              className="link courses-tile"
            >
              <img
                className="course-image"
                src={PlaceHolderImg}
                alt="welding student"
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
            <a
              href="#Thirdsourcelink"
              target="_blank"
              className="link courses-tile"
            >
              <img
                className="course-image"
                src={PlaceHolderImg}
                alt="welding student"
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
            <a 
              href="#Fourthsourcelink"
              target="_blank"
              className="link courses-tile"
            >
              <img 
                className="course-image"
                src={PlaceHolderImg}
                alt="welding student"
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
            <a 
                href="#Fifthsourcelink" 
                target="_blank" 
                className="link courses-tile"
            >
              <img 
                className="course-image" 
                src={PlaceHolderImg} 
                alt="welding student"
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
            <a 
                href="#sixthsourcelink" 
                target="_blank" 
                className="link courses-tile"
            >
              <img 
                className="course-image" 
                src={PlaceHolderImg} 
                alt="welding student" 
              />
              <p className="course-title">
                <span className="courses-name">Write name here</span>
                <i className="fa-light fa-arrow-right"></i>
              </p>
            </a>
           </div>
        </section>
    )
}