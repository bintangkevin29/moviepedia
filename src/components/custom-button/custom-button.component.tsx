import React from "react";
import { Button } from "react-bootstrap";
import { ButtonProps } from "react-bootstrap";

import "./custom-button.style.scss";

interface Props extends ButtonProps {
  isLoading?: boolean;
}

const CustomButton: React.FC<Props> = ({ isLoading, className, ...props }) => {
  const { children } = props;
  return (
    <Button className={`customButton ${className}`} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
