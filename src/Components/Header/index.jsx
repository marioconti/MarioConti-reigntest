import React from "react";
import "./styles.css";
import { ReactComponent as Title } from "../../Assets/hacker-news.svg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <Title />
      </div>
    </div>
  );
};
