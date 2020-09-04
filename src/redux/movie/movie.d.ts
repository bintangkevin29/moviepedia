export interface MovieState {
  popular: object[];
  isFetching: boolean;
}

export type MovieStateActionTypes =
  | {
      type: "MOVIE_FETCH_START";
    }
  | {
      type: "MOVIE_FETCH_SUCCESS";
      payload: object[];
    };
