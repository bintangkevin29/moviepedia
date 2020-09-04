import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
}

const Section: React.FC<Props> = ({ className, children, fluid }) => {
  return (
    <section className={className}>
      <Container fluid={fluid} className={`${fluid && "px-0"}`}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
