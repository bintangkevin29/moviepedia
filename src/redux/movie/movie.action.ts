import { Dispatch } from "redux";
import Axios from "axios";

import { MovieStateActionTypes } from "./movie";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const fetchMovieStart = (): MovieStateActionTypes => ({
  type: "MOVIE_FETCH_START",
});

const fetchMovieSuccess = (data: any): MovieStateActionTypes => ({
  type: "MOVIE_FETCH_SUCCESS",
  payload: data,
});

export const fetchMovieStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchMovieStart());
    Axios.get(`${apiUrl}/movie/popular${apiKey}`).then((res) =>
      dispatch(fetchMovieSuccess(res.data.results))
    );
  };
};
