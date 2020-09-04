import React, { Fragment } from "react";

import TopBanner from "../../components/top-banner";
import Popular from "../../components/popular";
import TopRated from "../../components/top-rated";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <TopBanner />
      <Popular />
      <TopRated />
    </Fragment>
  );
};

export default HomePage;
