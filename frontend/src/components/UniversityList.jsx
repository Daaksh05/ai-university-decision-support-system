import React from "react";

function UniversityList({ universities }) {
  return (
    <div className="result-box">
      <h4>Recommended Universities</h4>
      <ul>
        {universities.map((u, index) => (
          <li key={index}>
            <strong>{u.university}</strong> ({u.country}) – €{u.average_fees_eur}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UniversityList;
