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

export interface MovieCredits {
  crew: {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string;
  }[];
  cast: {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
  }[];
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: null;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
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
  nowPlaying: {
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
      type: "MOVIE_NOW_PLAYING_FETCH_START";
    }
  | {
      type: "MOVIE_POPULAR_FETCH_SUCCESS";
      payload: MovieObject[];
    }
  | {
      type: "MOVIE_TOPRATED_FETCH_SUCCESS";
      payload: MovieObject[];
    }
  | {
      type: "MOVIE_NOW_PLAYING_FETCH_SUCCESS";
      payload: MovieObject[];
    };

export interface MovieImageObject {
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  id: number;
  posters: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
