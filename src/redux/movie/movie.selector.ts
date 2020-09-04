import { RootState } from "../root.reducer";
import { createSelector } from "reselect";
import { MovieState } from "./movie";

const selectMovieState = (state: RootState): MovieState => state.movie;

export const selectPopularMovieFetchingStatus = createSelector(
  [selectMovieState],
  (state) => state.popular.isFetching
);

export const selectPopularMovies = createSelector(
  [selectMovieState],
  (state) => state.popular.data
);

export const selectTopRatedMovieFetchingStatus = createSelector(
  [selectMovieState],
  (state) => state.topRated.isFetching
);

export const selectTopRatedMovies = createSelector(
  [selectMovieState],
  (state) => state.topRated.data
);

export const selectNowPlayingMovieFetchingStatus = createSelector(
  [selectMovieState],
  (state) => state.nowPlaying.isFetching
);

export const selectNowPlayingMovies = createSelector(
  [selectMovieState],
  (state) => state.nowPlaying.data
);
