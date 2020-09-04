import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

interface Props {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
  dark?: boolean;
}

const Section: React.FC<Props> = ({ className, children, fluid, dark = false }) => {
  return (
    <section className={`${className} ${dark && `bg-tertiary`}`}>
      <Container fluid={fluid} className={`${fluid && "px-0"}`}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
