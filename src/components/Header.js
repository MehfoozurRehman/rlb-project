import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgrond = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgrond);
  window.addEventListener("mouseover", changeBackgrond);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className={navbar ? "nav__bar active" : "nav__bar"}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="fit-content"
          height="40"
          className="d-inline-block align-top"
          alt="brand-logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/vacancies" className="nav__link">
            Vacancies
          </Nav.Link>
          <Nav.Link as={Link} to="/professionals" className="nav__link">
            Professionals
          </Nav.Link>
          <Nav.Link as={Link} to="/clients" className="nav__link">
            Clients
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="nav__link">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav__link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
