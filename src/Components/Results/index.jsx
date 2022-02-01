import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { Dropdown } from "./Dropdown";
import { NewsList } from "./CardNews";
import { ARRAY_NUMS } from "./const";
import "./styles.css";

export const Results = () => {
  const [selected, setSelected] = useState("Select your news");
  const [newsListData, setNewsListData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [visit, setVisit] = useLocalStorage("selected", "");

  useEffect(() => {
    if (selected !== "Select your news") {
      const nameTecnology =
        selected.props.children[1].props.children.toLowerCase();
      setVisit(nameTecnology);
      getApiNews(visit, pagination);
    }
    getApiNews();
  }, [pagination]);

  useEffect(() => {
    getApiNews(visit, pagination);
    getApiNews();
  }, [visit, pagination]);

  useEffect(() => {
    if (selected !== "Select your news") {
      const nameTecnology =
        selected.props.children[1].props.children.toLowerCase();
      setVisit(nameTecnology);
      getApiNews(visit, pagination);
    }
    getApiNews();
  }, [selected]);

  const getApiNews = async (name, page) => {
    try {
      if (name && page) {
        const data = await fetch(
          `http://hn.algolia.com/api/v1/search_by_date?query=${name}&page=${page}&hitsPerPage=25`
        );
        const dataNews = await data.json();
        const ListData = await dataNews.hits;
        setNewsListData(ListData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePagination = (e) => {
    setPagination(parseFloat(e.target.innerHTML));
  };

  return (
    <div className="results-container">
      <div className="all-section">
        <Dropdown selected={selected} setSelected={setSelected} visit={visit} />
        <div className="results">
          <NewsList newsListData={newsListData} />
        </div>
        <div className="pagination-container">
          {newsListData.length > 0 &&
            ARRAY_NUMS.map((num) => {
              return (
                <div
                  key={num}
                  onClick={handlePagination}
                  className="box-pagination"
                >
                  {num}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
