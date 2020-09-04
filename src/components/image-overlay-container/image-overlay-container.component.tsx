import React, { ReactNode } from "react";

import "./image-overlay-container.style.scss";

interface Props {
  children: ReactNode;
  backgroundSrc: string;
  className?: string;
}

const ImageOverlayContainer: React.FC<Props> = ({ className, children, backgroundSrc }) => {
  return (
    <div className="imageOverlayContainer">
      <img className="imageOverlayContainer__background" src={backgroundSrc} alt="" />
      <div className="imageOverlayContainer__colorOverlay" />
      <div className={`imageOverlayContainer__mainContent ${className ? className : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default ImageOverlayContainer;
