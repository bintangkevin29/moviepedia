import React from "react";
import { Form } from "react-bootstrap";

import CustomInput from "../custom-input";
import CustomButton from "../custom-button";

import "./search-form.style.scss";

const SearchForm: React.FC = () => {
  return (
    <Form className="searchForm" inline>
      <CustomInput placeholder="Search Here" />
      <CustomButton variant="secondary" className="searchForm__button">
        Search
      </CustomButton>
    </Form>
  );
};

export default SearchForm;
