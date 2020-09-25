import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
const Header = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"  "}
          Cattleya
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
