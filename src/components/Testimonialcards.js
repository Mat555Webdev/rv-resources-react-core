import React from "react";
import PlaceHolder1 from "../Images/placeholder1.jpg";

export default function Testimonialcards () {
    return (
        <section className="testimonial-section">
           <h3>Testimonials from previous trainees</h3>
         
             <div className="card-deck">
                <div className="card">
                   <img className="card-img-top" 
                   src={PlaceHolder1} alt="trainee" />
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Wider card with supporting text below the below below low low</p>
                   </div>
                   <div className="card-footer">
                      <small className="text-muted">Last Updated 3 hours ago</small>
                   </div>
                </div>
                <div className="card">
                   <img className="card-img-top" 
                   src={PlaceHolder1} alt="trainee" />
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Wider card with supporting text below the below below low low</p>
                   </div>
                   <div className="card-footer">
                      <small className="text-muted">Last Updated 3 hours ago</small>
                   </div>
                </div>
                <div className="card">
                   <img className="card-img-top" 
                   src={PlaceHolder1} alt="trainee" />
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">Wider card with supporting text below the below below low low</p>
                   </div>
                   <div className="card-footer">
                      <small className="text-muted">Last Updated 3 hours ago</small>
                   </div>
                </div>
             </div>
              
        </section>
    )
}