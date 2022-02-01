import React, { useState } from "react";
import "./styles.css";

export const Section = () => {
  const [switchActive, setSwitchActive] = useState(true);

  const handleSwitch = () => {
    setSwitchActive(!switchActive);
  };
  return (
    <div className="section-container">
      <div
        onClick={handleSwitch}
        className={`button-section ${switchActive && "active"}`}
      >
        All
      </div>
      <div
        onClick={handleSwitch}
        className={`button-section ${!switchActive && "active"}`}
      >
        My Faves
      </div>
    </div>
  );
};
