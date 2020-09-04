import { MovieState, MovieStateActionTypes } from "./movie";

const INIT_STATE: MovieState = {
  popular: [],
  isFetching: false,
};

const movieReducer = (state = INIT_STATE, action: MovieStateActionTypes): MovieState => {
  switch (action.type) {
    case "MOVIE_FETCH_START":
      return {
        ...state,
        isFetching: true,
      };
    case "MOVIE_FETCH_SUCCESS":
      return {
        ...state,
        popular: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
