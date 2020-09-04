import React, { ReactNode } from "react";
import NavbarComponent from "../navbar";
import Footer from "../footer";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
