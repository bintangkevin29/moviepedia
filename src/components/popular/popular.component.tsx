import React from "react";

import SectionHeader from "../section-header";
import Section from "../section";

import "./popular.style.scss";
import Storefront from "../storefront";
import { Container } from "react-bootstrap";

const Popular: React.FC = () => {
  return (
    <Section className="popular">
      <SectionHeader>Popular</SectionHeader>
      <Storefront />
    </Section>
  );
};

export default Popular;
