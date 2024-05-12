import React from "react";
import "./doctor.css";

function Doctor() {
  const img = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k"];

  return (
    <>
      <div>Doctor</div>
      
        <div className="card-container">
          {img.map((option, index) => (
            <div key={index} className="card-option">
              <p>{option}</p>
            </div>
          ))}
        </div>
    </>
  );
}

export default Doctor;
