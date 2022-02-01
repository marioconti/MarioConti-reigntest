/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./styles.css";
import LikeImage from "../../../Assets/liked.png";
import unLikeImage from "../../../Assets/unliked.png";
import clock from "../../../Assets/creatAt.png";
// import { useLocalStorage } from "../../Hooks";

export const NewsList = ({ newsListData }) => {
  const [favorite, setFavorite] = useState(false);
  const [arrayUserId, setArrayUserId] = useState([]);
  // const [liked, setLiked] = useLocalStorage("arrayUserId", "");

  const handleNewsLike = (objectID) => {
    setFavorite(!favorite);
    if (arrayUserId.includes(objectID)) {
    } else {
      setArrayUserId([...arrayUserId, objectID]);
    }
  };

  return newsListData.map(
    ({ objectID, story_url, story_title, author, created_at }) => {
      const creatAt = new Date(created_at);
      const creatAtHour = creatAt.getHours();

      return (
        objectID &&
        story_url &&
        story_title &&
        author &&
        created_at !== null && (
          <div key={objectID} className="card-news-container">
            <a href={story_url} className="info-new" target="_blank">
              <div className="creatAt">
                <img class="clock" src={clock} alt="clock" />
                <p className="creatAt-text">{`${creatAtHour} hour ago by ${author}`}</p>
              </div>
              <div className="news-title">{story_title}</div>
            </a>
            <div className="like-container">
              <img
                onClick={() => handleNewsLike(objectID)}
                value={objectID}
                className="like"
                src={`${favorite ? LikeImage : unLikeImage}`}
                alt="like"
              />
            </div>
          </div>
        )
      );
    }
  );
};
