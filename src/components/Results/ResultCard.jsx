import React from "react";

export default function ResultCard({ title, value, unit, icon }) {
  return (
    <div className="ResultCard">
      <div className="card-image-container">
        <label className={`${icon}`} title={title}></label>
      </div>
      <div className="card-info-container">
        <p>
          {value} {unit}
        </p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
