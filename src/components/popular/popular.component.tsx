import React from "react";

import SectionHeader from "../section-header";
import Section from "../section";
import Storefront from "../storefront";


import "./popular.style.scss";

const Popular: React.FC = () => {
  return (
    <Section className="popular">
      <SectionHeader>Popular</SectionHeader>
      <Storefront />
    </Section>
  );
};

export default Popular;
