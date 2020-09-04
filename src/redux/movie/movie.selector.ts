import { RootState } from "../root.reducer";
import { createSelector } from "reselect";
import { MovieState } from "./movie";

const selectMovieState = (state: RootState): MovieState => state.movie;

export const selectPopularMovieFetchingStatus = createSelector(
  [selectMovieState],
  (state) => state.isFetching
);

export const selectPopularMovies = createSelector([selectMovieState], (state) => state.popular);
