import React from "react";

import HomePage from "./pages/home-page";
import MainLayout from "./components/main-layout";

import "./styles/global.scss";
import { Route } from "react-router-dom";

const modules = [
  {
    name: "Home Page",
    Component: HomePage,
    url: "/",
  },
];

const App = () => {
  return (
    <Route exact path={modules.map((mod) => mod.url)}>
      <MainLayout>
        {modules.map((mod) => (
          <Route exact path={mod.url} component={mod.Component} />
        ))}
      </MainLayout>
    </Route>
  );
};

export default App;
