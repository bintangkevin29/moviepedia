import React from "react";
import { Navbar, Container } from "react-bootstrap";

import "./navbar.style.scss";
import { Link } from "react-router-dom";
import SearchForm from "../search-form";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar fixed="top" className="navbarComponent" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <strong className="navbarComponent__title">Movie DB</strong>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <SearchForm />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
