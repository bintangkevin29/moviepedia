import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopRatedMovieStartAsync } from "../../redux/movie/movie.action";
import {
  selectTopRatedMovies,
  selectTopRatedMovieFetchingStatus,
} from "../../redux/movie/movie.selector";

import Section from "../section";
import SectionHeader from "../section-header";
import Storefront from "../storefront";

import "./top-rated.style.scss";

const TopRated: React.FC = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(selectTopRatedMovies);
  const isFetching = useSelector(selectTopRatedMovieFetchingStatus);
  useEffect(() => {
    dispatch(fetchTopRatedMovieStartAsync());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Section dark className="topRated">
      <SectionHeader dark>Top Rated</SectionHeader>
      <Storefront dark movieData={movieData} isFetching={isFetching} />
    </Section>
  );
};

export default TopRated;
