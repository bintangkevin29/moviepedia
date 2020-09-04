import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

const SearchForm: React.FC = () => {
  return (
    <Form className="searchForm" inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchForm;
