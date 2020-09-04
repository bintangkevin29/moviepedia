import React from "react";

import HomePage from "./pages/home-page";
import MainLayout from "./components/main-layout";

import "./styles/global.scss";
import { Route } from "react-router-dom";
import MovieDetailsPage from "./pages/movie-details-page";

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
];

const App = () => {
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
