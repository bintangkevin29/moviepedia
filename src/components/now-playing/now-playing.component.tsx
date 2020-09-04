import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchNowPlayingMovieStartAsync,
} from "../../redux/movie/movie.action";
import {
  selectNowPlayingMovieFetchingStatus,
  selectNowPlayingMovies,
} from "../../redux/movie/movie.selector";

import SectionHeader from "../section-header";
import Section from "../section";
import Storefront from "../storefront";

import "./now-playing.style.scss";

const NowPlaying: React.FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectNowPlayingMovieFetchingStatus);
  const movieData = useSelector(selectNowPlayingMovies);

  useEffect(() => {
    dispatch(fetchNowPlayingMovieStartAsync());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="nowPlaying">
      <SectionHeader>Now Playing</SectionHeader>
      <Storefront movieData={movieData} isFetching={isFetching} />
    </Section>
  );
};

export default NowPlaying;
