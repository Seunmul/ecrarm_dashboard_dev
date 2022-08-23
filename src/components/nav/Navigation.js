import React from "react";
import {
  Container,
  Button,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
} from "react-bootstrap";
import pica from "../../img/pica.jpg";

const Navigation = () => {
  const toggleMenu = (
    <ul className="navbar-nav me-auto mb-2 mb-sm-0 d-block-lg">
      <hr />
      <NavItem>
        <NavLink
          className="active"
          aria-current="page"
          style={{ fontWeight: "bolder" }}
        >
          {/* <i className=" bi bi-house-door sidebar-icon-size"></i> */}
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {/* <i className="bi bi-table sidebar-icon-size"></i> */}
          Info
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {/* <i className="bi bi-person-workspace sidebar-icon-size"></i> */}
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {/* <i className="bi bi-info-square sidebar-icon-size"></i> */}
          Sign out
        </NavLink>
      </NavItem>
      <NavItem className="dropdown">
        <NavLink
          className="dropdown-toggle"
          id="dropdown03"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </NavLink>
        <ul className="dropdown-menu" aria-labelledby="dropdown03">
          <li>
            <div className="dropdown-item">Contact</div>
          </li>
          <li>
            <div className="dropdown-item">Something else here</div>
          </li>
        </ul>
      </NavItem>
    </ul>
  );

  return (
    <Nav
      className="navbar sticky-top navbar-light bg-light navbar-expand-sm"
      aria-label="Third navbar example"
      style={{ width: "100%" }}
    >
      <Container fluid style={{ padding: "3px", margin: "0px 1.5rem" }}>
        <NavbarBrand>
          <img src={pica} alt="" width="50px" height="50px" />
        </NavbarBrand>
        <span
          style={{
            paddingRight: "5px",
            fontSize: "160%",
            fontWeight: "500",
            color: "",
          }}
        >
          ECRARM
        </span>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse id="navbarsExample03">{toggleMenu}</Navbar.Collapse>
      </Container>
    </Nav>
  );
};

export default Navigation;

const legacy = (
  <ul className="navbar-nav  me-auto mb-2 mb-sm-0">
    <hr />
    <NavItem>
      <NavLink
        className="active"
        aria-current="page"
        style={{ fontWeight: "bolder" }}
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink>Link</NavLink>
    </NavItem>
    <NavItem className="dropdown">
      <NavLink
        className="dropdown-toggle"
        id="dropdown03"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown
      </NavLink>
      <ul className="dropdown-menu" aria-labelledby="dropdown03">
        <li>
          <div className="dropdown-item">Settings</div>
        </li>
        <li>
          <div className="dropdown-item">Sign out</div>
        </li>
        <li>
          <div className="dropdown-item">Something else here</div>
        </li>
      </ul>
    </NavItem>
  </ul>
);
