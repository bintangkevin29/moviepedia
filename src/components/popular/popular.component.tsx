import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovieStartAsync } from "../../redux/movie/movie.action";

import SectionHeader from "../section-header";
import Section from "../section";
import Storefront from "../storefront";

import "./popular.style.scss";

const Popular: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieStartAsync());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className="popular">
      <SectionHeader>Popular</SectionHeader>
      <Storefront />
    </Section>
  );
};

export default Popular;
