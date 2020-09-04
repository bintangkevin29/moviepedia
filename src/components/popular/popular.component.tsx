import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPopularMovieStartAsync } from "../../redux/movie/movie.action";
import {
  selectPopularMovieFetchingStatus,
  selectPopularMovies,
} from "../../redux/movie/movie.selector";

import SectionHeader from "../section-header";
import Section from "../section";
import Storefront from "../storefront";

import "./popular.style.scss";

const Popular: React.FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectPopularMovieFetchingStatus);
  const movieData = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovieStartAsync());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="popular">
      <SectionHeader>Popular</SectionHeader>
      <Storefront movieData={movieData} isFetching={isFetching} />
    </Section>
  );
};

export default Popular;
