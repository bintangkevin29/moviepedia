import React from "react";

import HomePage from "./pages/home-page";
import MainLayout from "./components/main-layout";

import "./styles/global.scss";

const App = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default App;
