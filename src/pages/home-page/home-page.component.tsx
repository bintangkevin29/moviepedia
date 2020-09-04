import React, { Fragment } from "react";

import TopBanner from "../../components/top-banner";
import Popular from "../../components/popular";
import TopRated from "../../components/top-rated";
import NowPlaying from "../../components/now-playing";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <TopBanner />
      <Popular />
      <TopRated />
      <NowPlaying />
    </Fragment>
  );
};

export default HomePage;
