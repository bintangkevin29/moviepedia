import React from "react";
import Section from "../../components/section";
import SectionHeader from "../../components/section-header";
import { useParams } from "react-router-dom";

const SearchResultPage: React.FC = () => {
  const { keyword } = useParams();
  return (
    <Section>
      <SectionHeader>Search Result For {keyword}</SectionHeader>
    </Section>
  );
};

export default SearchResultPage;
