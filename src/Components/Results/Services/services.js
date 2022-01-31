// import { useState } from "react";
import {useState} from "react"
import axios from "axios";

const baseUrl = "http://hn.algolia.com/api/v1";

export const Services = async (name, page) => {
    // const [newsListData, setNewsListData] = useState([]);
  try {
    const resNews = await axios.get(
      `${baseUrl}/search_by_date?query=${name}&page=${page}&hitsPerPage=8`
    );
    const dataNews = await resNews.data.hits;
    console.log(dataNews);
    console.log(resNews.data.hits)

    // setNewsListData(dataNews)

    return dataNews;
  } catch (error) {
    console.log(error);
  }
};

