import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./doctor.css";
function Bloodbank(){

    const img = ["a", "b"];
    return(
        <>
           <div className="cardNav">
        <Link to="/">
        <div className="backArrow">
          {"<"}
        </div>
        </Link>
        <p>Clinic</p>
      </div>
      
        <div className="card-container">
          {img.map((option, index) => (
            <div key={index} className="card-option">
              <p>{option}</p>
            </div>
          ))}
        </div>
        </>
    )
}

export default Bloodbank;