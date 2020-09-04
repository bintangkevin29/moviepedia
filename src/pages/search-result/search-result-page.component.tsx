import React, { useState, useEffect, Fragment } from "react";
import Section from "../../components/section";
import SectionHeader from "../../components/section-header";
import { useParams } from "react-router-dom";

import "./search-result-page.style.scss";
import { MovieObject } from "../../redux/movie/movie";
import Axios from "axios";
import { apiUrl, apiKey } from "../../redux/movie/movie.action";
import CustomSpinner from "../../components/custom-spinner";
import MovieCard from "../../components/movie-card";
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SearchResultPage: React.FC = () => {
  const { keyword } = useParams();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<MovieObject[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Axios.get(`${apiUrl}/search/movie${apiKey}&page=${currentPage}&query=${keyword}`).then(
        (res) => {
          setSearchResults(res.data.results);
        }
      );
      setLoading(false);
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const loadMore = async () => {
    const newPage = currentPage + 1;
    setLoading(true);

    await Axios.get(`${apiUrl}/search/movie${apiKey}&page=${newPage}&query=${keyword}`).then(
      (res) => {
        setSearchResults([...searchResults, ...res.data.results]);
        setCurrentPage(newPage);
        setLoading(false);
      }
    );
  };

  return (
    <Section className="searchResultPage">
      <Helmet>
        <title>Search result for {keyword} &ndash; MoviePedia</title>
      </Helmet>
      <SectionHeader>Search Result For "{keyword}"</SectionHeader>
      <div className="searchResultPage__results">
        {isLoading && !searchResults ? (
          <CustomSpinner />
        ) : (
          <Fragment>
            {searchResults?.map((result) => (
              <MovieCard {...result} />
            ))}
            <div className="searchResultPage__fetchMore">
              {isLoading ? (
                <CustomSpinner />
              ) : (
                <div className="searchResultPage__fetchButton" onClick={loadMore}>
                  Load More
                  <FaChevronDown />
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </Section>
  );
};

export default SearchResultPage;
