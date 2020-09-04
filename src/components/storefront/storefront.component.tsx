import React from "react";

import MovieCard from "../movie-card";

import "./storefront.style.scss";

const Storefront: React.FC = () => {
  return (
    <div className="storefront">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Storefront;
