import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";

import "./navbar.style.scss";
import { Link } from "react-router-dom";
import SearchForm from "../search-form";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar fixed="top" className="navbarComponent" expand="lg">
      <Container>
        <Row className='navbarComponent__inner'>
          <Col xs={4}>
            <Navbar.Brand>
              <Link to="/">
                <strong className="navbarComponent__title">Movie DB</strong>
              </Link>
            </Navbar.Brand>
          </Col>
          <Col xs={8}>
            <SearchForm />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
