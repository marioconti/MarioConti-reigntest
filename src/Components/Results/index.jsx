import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import "./styles.css";

export const Results = () => {
  const [selected, setSelected] = useState("Select your news");
  return (
    <div className="results-container">
      <div className="all-section">
        <Dropdown selected={selected} setSelected={setSelected} />
        <div className="results"></div>
      </div>
    </div>
  );
};

// Si all está en true mostrar la sección de all
// Si My Faves está en true mostrar los que tengan el corazón en true (mostrar lo que esté en el local storage). Los que esten en el local storage van a ser los que tengan el corazón en true?
