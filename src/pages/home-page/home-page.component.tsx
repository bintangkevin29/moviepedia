import React, { Fragment } from "react";

import TopBanner from "../../components/top-banner";
import Popular from "../../components/popular";
import TopRated from "../../components/top-rated";
import NowPlaying from "../../components/now-playing";
import { Helmet } from "react-helmet";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home &ndash; MoviePedia</title>
      </Helmet>
      <TopBanner />
      <Popular />
      <TopRated />
      <NowPlaying />
    </Fragment>
  );
};

export default HomePage;
