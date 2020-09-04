import React from "react";

import Section from "../section";
import ImageOverlayContainer from "../image-overlay-container";

import "./top-banner.style.scss";

const TopBanner: React.FC = () => {
  return (
    <Section className="topBanner">
      <ImageOverlayContainer
        className="topBanner__banner"
        backgroundSrc={require("../../assets/images/banner.jpg")}
      >
        <span className="topBanner__title">Welcome</span>
        <span className="topBanner__title topBanner__title--subtitle">
          Your one stop movie index
        </span>
      </ImageOverlayContainer>
    </Section>
  );
};

export default TopBanner;
