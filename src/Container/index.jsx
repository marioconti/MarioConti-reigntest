import React from "react";
import "./styles.css"
import { Section } from "../Components/Section";
import { Header } from "../Components/Header";
import { Results } from "../Components/Results";

export const Container = () => {
  return (
    <>
      <div class="main-container">
        <Header />
        <Section />
        <Results />
      </div>
    </>
  );
};
