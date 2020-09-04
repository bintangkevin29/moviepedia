import React, { ReactNode } from "react";

import "./section-header.style.scss";

interface Props {
  children: ReactNode;
  dark?: boolean;
}

const SectionHeader: React.FC<Props> = ({ children, dark = false }) => {
  return <span className={`sectionHeader ${dark && "sectionHeader--dark"}`}>{children}</span>;
};

export default SectionHeader;
