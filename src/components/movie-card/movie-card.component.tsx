import React from "react";
import { HiThumbUp } from "react-icons/hi";

import { MovieObject } from "../../redux/movie/movie";

import "./movie-card.style.scss";
import { Link } from "react-router-dom";

interface Props extends MovieObject {
  dark?: boolean;
}

const MovieCard: React.FC<Props> = ({ dark, ...props }) => {
  const imageUrl = process.env.REACT_APP_API_IMAGE_URL;
  const titleMaxLength = 25;
  return (
    <Link to={`/details/${props.id}`} className={`movieCard ${dark ? "movieCard--dark" : ""}`}>
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
    </Link>
  );
};

export default MovieCard;
