import { Dispatch } from "redux";
import Axios from "axios";

import { MovieStateActionTypes } from "./movie";

export const apiUrl = process.env.REACT_APP_API_URL;
export const apiKey = process.env.REACT_APP_API_KEY;

const fetchPopularMovieStart = (): MovieStateActionTypes => ({
  type: "MOVIE_POPULAR_FETCH_START",
});

const fetchTopRatedMovieStart = (): MovieStateActionTypes => ({
  type: "MOVIE_TOPRATED_FETCH_START",
});

const fetchNowPlayingMovieStart = (): MovieStateActionTypes => ({
  type: "MOVIE_NOW_PLAYING_FETCH_START",
});

const fetchPopularMovieSuccess = (data: any): MovieStateActionTypes => ({
  type: "MOVIE_POPULAR_FETCH_SUCCESS",
  payload: data,
});

const fetchTopRatedMovieSuccess = (data: any): MovieStateActionTypes => ({
  type: "MOVIE_TOPRATED_FETCH_SUCCESS",
  payload: data,
});

const fetchNowPlayingMovieSuccess = (data: any): MovieStateActionTypes => ({
  type: "MOVIE_NOW_PLAYING_FETCH_SUCCESS",
  payload: data,
});

export const fetchPopularMovieStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchPopularMovieStart());
    Axios.get(`${apiUrl}/movie/popular${apiKey}`).then((res) =>
      dispatch(fetchPopularMovieSuccess(res.data.results))
    );
  };
};

export const fetchTopRatedMovieStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchTopRatedMovieStart());
    Axios.get(`${apiUrl}/movie/top_rated${apiKey}`).then((res) =>
      dispatch(fetchTopRatedMovieSuccess(res.data.results))
    );
  };
};

export const fetchNowPlayingMovieStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchNowPlayingMovieStart());
    Axios.get(`${apiUrl}/movie/now_playing${apiKey}`).then((res) =>
      dispatch(fetchNowPlayingMovieSuccess(res.data.results))
    );
  };
};
