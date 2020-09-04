import React from "react";

import "./storefront.style.scss";
import MovieCard from "../movie-card";
import { Container } from "react-bootstrap";

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
