import React from "react";
import { HiThumbUp } from "react-icons/hi";

import "./movie-card.style.scss";

const MovieCard: React.FC = () => {
  return (
    <div className="movieCard">
      <div className="movieCard__posterContainer">
        <img
          className="movieCard__poster"
          src="https://image.tmdb.org/t/p/w220_and_h330_face/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
          alt=""
        />
        <div className="movieCard__pill">
          <div className="movieCard__pillInner movieCard__pillInner--date">20 Jul 2020</div>
          <div className="movieCard__pillInner movieCard__pillInner--rating">
            <HiThumbUp className="movieCard__thumbIcon" />
            10%
          </div>
        </div>
      </div>
      <div className="movieCard__description">
        <span className="movieCard__title">The Avenger</span>
      </div>
    </div>
  );
};

export default MovieCard;
