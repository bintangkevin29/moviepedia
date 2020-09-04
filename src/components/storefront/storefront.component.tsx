import React from "react";

import MovieCard from "../movie-card";

import "./storefront.style.scss";
import CustomSpinner from "../custom-spinner";
import { MovieObject } from "../../redux/movie/movie";

interface Props {
  isFetching: boolean;
  movieData: MovieObject[];
}

const Storefront: React.FC<Props> = ({ isFetching, movieData }) => {
  return (
    <div className="storefront">
      {isFetching ? (
        <CustomSpinner />
      ) : (
        movieData.map((movie) => <MovieCard key={movie.id} {...movie} />)
      )}
    </div>
  );
};

export default Storefront;
