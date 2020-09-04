import React, { useState, FormEvent } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import CustomInput from "../custom-input";
import CustomButton from "../custom-button";

import "./search-form.style.scss";
import { useHistory } from "react-router-dom";

const SearchForm: React.FC = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
  };
  return (
    <Form className="searchForm" onSubmit={handleSearch}>
      <CustomInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Here"
      />
      <CustomButton type="submit" variant="secondary" className="searchForm__button">
        <FaSearch />
      </CustomButton>
    </Form>
  );
};

export default SearchForm;
