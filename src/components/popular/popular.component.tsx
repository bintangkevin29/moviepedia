import React from "react";

import SectionHeader from "../section-header";
import Section from "../section";

import "./popular.style.scss";

const Popular: React.FC = () => {
  return (
    <Section className="popular">
      <SectionHeader>Popular</SectionHeader>
    </Section>
  );
};

export default Popular;
