import React from "react";
import { FormControl } from "react-bootstrap";
import { FormControlProps } from "react-bootstrap";

import "./custom-input.style.scss";

interface Props extends FormControlProps {
  placeholder?: string;
}

const CustomInput: React.FC<Props> = ({ placeholder, className, ...props }) => {
  return (
    <FormControl
      placeholder={placeholder}
      className={`customInput ${className ? className : ""}`}
      {...props}
    />
  );
};

export default CustomInput;
