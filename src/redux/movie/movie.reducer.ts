import { MovieState, MovieStateActionTypes } from "./movie";

const INIT_STATE: MovieState = {
  popular: {
    data: [],
    isFetching: false,
  },
  topRated: {
    data: [],
    isFetching: false,
  },
};

const movieReducer = (state = INIT_STATE, action: MovieStateActionTypes): MovieState => {
  switch (action.type) {
    case "MOVIE_POPULAR_FETCH_START":
      return {
        ...state,
        popular: {
          ...state.popular,
          isFetching: true,
        },
      };
    case "MOVIE_TOPRATED_FETCH_START":
      return {
        ...state,
        topRated: {
          ...state.topRated,
          isFetching: true,
        },
      };
    case "MOVIE_POPULAR_FETCH_SUCCESS":
      return {
        ...state,
        popular: {
          data: action.payload,
          isFetching: false,
        },
      };
    case "MOVIE_TOPRATED_FETCH_SUCCESS":
      return {
        ...state,
        topRated: {
          data: action.payload,
          isFetching: false,
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
