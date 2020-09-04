import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  className?: string;
  children: ReactNode;
}

const Section: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
