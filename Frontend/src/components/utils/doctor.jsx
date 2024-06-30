import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./doctor.css";

function Doctor() {
  const img = {a:"a", b:"b", c:"c", d:"d", e:"e", f:"f",g:"g", h:"h", i:"i", j:"j", k:"k"};

  return (
    <>
      <div className="cardNav">
        <Link to="/">
        <div className="backArrow">
          {"<"}
        </div>
        </Link>
        <p>DOCTOR</p>
      </div>
      
        <div className="card-container">
        {Object.entries(img).map(([key, value]) => (
          <div classname = "card-all">
            <div key={key} className="card-option">
              <p>{value}</p>
            </div>
            <p>{key}</p>
            </div>
          ))}
        </div>
    </>
  );
}

export default Doctor;
