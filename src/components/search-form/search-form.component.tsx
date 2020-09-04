import React from "react";
import { Form, Button } from "react-bootstrap";

import CustomInput from "../custom-input";

const SearchForm: React.FC = () => {
  return (
    <Form className="searchForm" inline>
      <CustomInput placeholder="Search Here" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchForm;
