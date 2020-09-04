import React from "react";
import { Container } from "react-bootstrap";
import ImageOverlayContainer from "../image-overlay-container";

import "./top-banner.style.scss";

const TopBanner: React.FC = () => {
  return (
    <section className="topBanner">
      <Container>
        <ImageOverlayContainer
          className="topBanner__banner"
          backgroundSrc={require("../../assets/images/banner.jpg")}
        >
          <span className="topBanner__title">Welcome</span>
          <span className="topBanner__title topBanner__title--subtitle">
            Your one stop movie index
          </span>
        </ImageOverlayContainer>
      </Container>
    </section>
  );
};

export default TopBanner;
