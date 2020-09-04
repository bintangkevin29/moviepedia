import React from "react";

import "./movie-poster.style.scss";

interface Props {
  src?: string;
  className?: string;
}

const MoviePoster: React.FC<Props> = ({ src, className }) => {
  const imageUrl = process.env.REACT_APP_API_IMAGE_URL;

  return <img className={`moviePoster ${className}`} alt="" src={`${imageUrl}${src}`}></img>;
};

export default MoviePoster;
