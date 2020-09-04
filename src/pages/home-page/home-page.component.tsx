import React, { Fragment } from "react";

import TopBanner from "../../components/top-banner";
import Popular from "../../components/popular";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <TopBanner />
      <Popular />
    </Fragment>
  );
};

export default HomePage;
