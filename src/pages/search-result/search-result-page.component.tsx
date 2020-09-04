import React from "react";
import Section from "../../components/section";
import SectionHeader from "../../components/section-header";
import { useParams } from "react-router-dom";

import "./search-result-page.style.scss";

const SearchResultPage: React.FC = () => {
  const { keyword } = useParams();
  return (
    <Section className="searchResultPage">
      <SectionHeader>Search Result For {keyword}</SectionHeader>
    </Section>
  );
};

export default SearchResultPage;
