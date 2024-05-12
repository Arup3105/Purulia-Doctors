import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./doctor.css";
function Clinic(){

    const img = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k"];
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

export default Clinic