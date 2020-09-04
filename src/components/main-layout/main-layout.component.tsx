import React, { ReactNode } from "react";
import NavbarComponent from "../navbar";
import Footer from "../footer";

import "./main-layout.style.scss";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mainLayout">
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
