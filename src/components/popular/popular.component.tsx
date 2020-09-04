import React from "react";

import "./popular.style.scss";
import SectionHeader from "../section-header";
import { Container } from "react-bootstrap";

const Popular: React.FC = () => {
  return (
    <section className="popular">
      <Container>
        <SectionHeader>Popular</SectionHeader>
      </Container>
    </section>
  );
};

export default Popular;
