import React, { useEffect, useState } from "react";
import Section from "../../components/section";
import SectionHeader from "../../components/section-header";
import Axios from "axios";

import { MovieObject } from "../../redux/movie/movie";
import { apiKey, apiUrl } from "../../redux/movie/movie.action";

import "./movie-details-page.style.scss";
import { useParams } from "react-router-dom";

const MovieDetailsPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<MovieObject>();
  
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`${apiUrl}/movie/${id}${apiKey}`).then((res) => setMovieDetails(res.data));
  }, []);

  return (
    <Section className="movieDetailsPage">
      <SectionHeader>Tes</SectionHeader>
    </Section>
  );
};

export default MovieDetailsPage;
