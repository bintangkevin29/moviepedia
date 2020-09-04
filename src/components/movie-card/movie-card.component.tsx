import React from "react";
import { HiThumbUp } from "react-icons/hi";

import { MovieObject } from "../../redux/movie/movie";

import "./movie-card.style.scss";

const MovieCard: React.FC<MovieObject> = ({ ...props }) => {
  const imageUrl = process.env.REACT_APP_API_IMAGE_URL;
  const titleMaxLength = 25;
  return (
    <div className="movieCard">
      <div className="movieCard__posterContainer">
        <img className="movieCard__poster" src={`${imageUrl}${props.poster_path}`} alt="" />
        <div className="movieCard__pill">
          <div className="movieCard__pillInner movieCard__pillInner--date">
            {props.release_date}
          </div>
          <div className="movieCard__pillInner movieCard__pillInner--rating">
            <HiThumbUp className="movieCard__thumbIcon" />
            {props.vote_average}
          </div>
        </div>
      </div>
      <div className="movieCard__description">
        <span className="movieCard__title">
          {props.title.length > titleMaxLength
            ? `${props.title.substring(0, titleMaxLength)}...`
            : props.title}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
