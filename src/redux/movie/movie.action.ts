import { MovieStateActionTypes } from "./movie";
import { Dispatch } from "redux";

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
  };
};
