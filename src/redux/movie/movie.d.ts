export interface MovieObject {
  popularity?: number;
  vote_count: number;
  video?: boolean;
  poster_path: string;
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: Array[number];
  title: string;
  vote_average?: number;
  overview?: string;
  release_date: string;
}

export interface MovieState {
  popular: {
    data: MovieObject[];
    isFetching: boolean;
  };
  topRated: {
    data: MovieObject[];
    isFetching: boolean;
  };
}

export type MovieStateActionTypes =
  | {
      type: "MOVIE_POPULAR_FETCH_START";
    }
  | {
      type: "MOVIE_TOPRATED_FETCH_START";
    }
  | {
      type: "MOVIE_POPULAR_FETCH_SUCCESS";
      payload: MovieObject[];
    }
  | {
      type: "MOVIE_TOPRATED_FETCH_SUCCESS";
      payload: MovieObject[];
    };
