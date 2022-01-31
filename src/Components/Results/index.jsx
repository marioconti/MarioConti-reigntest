import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
// import { NewsList } from "./NewsList/index";
import { CardNews } from "./CardNews/index";
import { Services } from "./Services/services";
import "./styles.css";

export const Results = () => {
  const [selected, setSelected] = useState("Select your news");

  // const [newsListData, setNewsListData] = useState([]);

  if (selected !== "Select your news") {
    const nameTecnology =
      selected.props.children[1].props.children.toLowerCase();
    Services(nameTecnology, 1);
  }

  return (
    <div className="results-container">
      <div className="all-section">
        <Dropdown selected={selected} setSelected={setSelected} />
        <div className="results">
          {/* <NewsList /> */} <CardNews /> <CardNews /> <CardNews /> <CardNews /> <CardNews />
        </div>
      </div>
    </div>
  );
};

// Si all está en true mostrar la sección de all
// Si My Faves está en true mostrar los que tengan el corazón en true (mostrar lo que esté en el local storage). Los que esten en el local storage van a ser los que tengan el corazón en true?
