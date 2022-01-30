import React, { useState } from "react";
import "./styles.css";
import dropdown from "../../../Assets/down-arrow.png";
import { newsSite } from "./data.js";

export const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <img className="margin dropdown-arrow " src={dropdown} alt="select" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {newsSite.map(({ img, name }) => (
            <div
              key={name}
              onClick={() => {
                setSelected(
                  <>
                    <img className="dropdown-arrow" src={img} alt={name}></img>
                    <p className="selected-text">{name}</p>
                  </>
                );
                setIsActive(false);
              }}
            >
              <div className="dropdown-item">
                <img src={img} alt={name} />
                <p>{name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
