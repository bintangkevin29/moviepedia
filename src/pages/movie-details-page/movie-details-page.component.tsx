import React, { useEffect, useState, Fragment } from "react";
import Section from "../../components/section";
import SectionHeader from "../../components/section-header";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { MovieCredits, MovieDetails } from "../../redux/movie/movie";
import { apiKey, apiUrl } from "../../redux/movie/movie.action";

import CustomSpinner from "../../components/custom-spinner";
import MoviePoster from "../../components/movie-poster";

import "./movie-details-page.style.scss";
import { HiThumbUp } from "react-icons/hi";
import { Row, Col } from "react-bootstrap";

const MovieDetailsPage: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();
  const [credits, setCredits] = useState<MovieCredits>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(`${apiUrl}/movie/${id}${apiKey}`).then((res) => {
        setMovieDetails(res.data);
      });
      await Axios.get(`${apiUrl}/movie/${id}/credits${apiKey}`).then((res) => {
        setCredits(res.data);
      });
      setLoading(false);
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movieDetails);
  console.log(credits);

  return (
    <Section className="movieDetailsPage">
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <Fragment>
          <SectionHeader>
            {`${movieDetails?.title} (${movieDetails?.release_date.split("-")[0]})`}
          </SectionHeader>
          <Row className="movieDetailsPage__mainContent">
            <Col lg={5} xs={12} md={12} className="movieDetailsPage__posterContainer">
              <MoviePoster className="movieDetailsPage__poster" src={movieDetails?.poster_path} />
            </Col>
            <Col className="movieDetailsPage__detailsContainer" lg={7} md={12}>
              <div className="movieDetailsPage__details">
                <table className="movieDetailsPage__detailTable">
                  <tbody>
                    <tr>
                      <td className="movieDetailsPage__itemName">Director(s)</td>
                      <td className="movieDetailsPage__itemDescription">
                        :{" "}
                        {credits?.crew
                          .filter((c) => c.department === "Directing")
                          .map((c) => c.name)
                          .join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td className="movieDetailsPage__itemName">Writer(s)</td>
                      <td className="movieDetailsPage__itemDescription">
                        :{" "}
                        {credits?.crew
                          .filter((c) => c.department === "Writing")
                          .map((c) => c.name)
                          .join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td className="movieDetailsPage__itemName">Genre</td>
                      <td className="movieDetailsPage__itemDescription">
                        : {movieDetails?.genres.map((genre) => genre.name).join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td className="movieDetailsPage__itemName">Release Date</td>
                      <td className="movieDetailsPage__itemDescription">
                        : {movieDetails?.release_date}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <span className="movieDetailsPage__tagline">{movieDetails?.tagline}</span>
                <span className="movieDetailsPage__synopsis">{movieDetails?.overview}</span>
                <div className="movieDetailsPage__score">
                  <HiThumbUp />{" "}
                  <span className="movieDetailsPage__scoreDetails">
                    {movieDetails?.vote_average}
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Fragment>
      )}
    </Section>
  );
};

export default MovieDetailsPage;
