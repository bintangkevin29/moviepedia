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
  }, []);
  return (
    <Section className="topRated">
      <SectionHeader>Top Rated</SectionHeader>
      <Storefront movieData={movieData} isFetching={isFetching} />
    </Section>
  );
};

export default TopRated;
