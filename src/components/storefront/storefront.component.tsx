import React from "react";

import "./storefront.style.scss";
import MovieCard from "../movie-card";

const Storefront: React.FC = () => {
  return (
    <div className="storefront">
      <MovieCard />
    </div>
  );
};

export default Storefront;
