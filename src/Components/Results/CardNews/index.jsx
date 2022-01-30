import React from "react";
import "./styles.css";
import likeImage from "../../../Assets/liked.png";
import unLikeImage from "../../../Assets/unliked.png";
import clock from "../../../Assets/creatAt.png";

export const CardNews = () => {
  return (
    <div className="card-news-container">
      <div className="info-new">
        <div className="creatAt">
          <img class="clock" src={clock} alt="clock" />
          <p className="creatAt-text">1 hour ago by author</p>
        </div>
        <div className="news-title">
          Realize for React for Visualizing State ﬂow and component hierarchy
        </div>
      </div>
      <div className="like-container">
        <img className="like" src={likeImage} alt="like" />
      </div>
    </div>
  );
};
