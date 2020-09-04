import React, { ReactNode } from "react";
import NavbarComponent from "../navbar";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      {children}
    </div>
  );
};

export default MainLayout;
