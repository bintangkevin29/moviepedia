import React, { useEffect } from "react";

import HomePage from "./pages/home-page";
import MainLayout from "./components/main-layout";

import "./styles/global.scss";
import { Route, useHistory } from "react-router-dom";
import MovieDetailsPage from "./pages/movie-details-page";
import SearchResultPage from "./pages/search-result";

const modules = [
  {
    name: "Home Page",
    Component: HomePage,
    url: "/",
  },
  {
    name: "Movie Details",
    Component: MovieDetailsPage,
    url: "/details/:id",
  },
  {
    name: "Search Result",
    Component: SearchResultPage,
    url: "/search/:keyword",
  },
];

const App = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route exact path={modules.map((mod) => mod.url)}>
      <MainLayout>
        {modules.map((mod, i) => (
          <Route key={i} exact path={mod.url} component={mod.Component} />
        ))}
      </MainLayout>
    </Route>
  );
};

export default App;
