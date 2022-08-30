import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../img/logo7.png";
import "./Navigation.css";
import LoginLogo from "../loginlogo";

const Navigation = ({
  menuSelected,
  onMenuSelect,
  sideBar,
  sideBarHandler,
}) => {
  const icons = [
    {
      logo: <i className="bi bi-house-door navigation-icon-size" />,
      name: "Home / Dashboard",
    },
    {
      logo: <i className="bi bi-table navigation-icon-size   " />,
      name: "Detail Information",
    },
    {
      logo: <i className="bi bi-person-workspace navigation-icon-size" />,
      name: "Control Panel",
    },
    {
      logo: <i className="bi bi-info-square navigation-icon-size " />,
      name: "Program Info",
    },
  ];
  const linkIcons = icons.map((icon, i) => {
    return (
      <Nav.Item
        key={i}
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        as="li"
      >
        <Nav.Link
          aria-current="page"
          style={{ display: "flex", fontWeight: "800" }}
          className={`navigation-icon text-black ${
            menuSelected === i && "active"
          }`}
          href={`/#`}
          eventKey={`${i}`}
        >
          {icon.logo}
          <div style={{ fontSize: "20px" }}>{icon.name}</div>
        </Nav.Link>
      </Nav.Item>
    );
  });
  const toggleMenu = (
    <Nav
      className="me-auto mb-2 mb-sm-0 flex-column flex-column container"
      defaultActiveKey="/"
      as="ul"
      onSelect={(selectedKey) => {
        onMenuSelect(selectedKey);
      }}
    >
      <hr />
      <Nav.Item
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        as="li"
      >
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          ECRARM DashBoard
        </h4>
        <hr />
      </Nav.Item>

      {linkIcons}
    </Nav>
  );

  return (
    <Nav
      className="navbar sticky-top navbar-light bg-light"
      aria-label="Third navbar example"
      style={{ width: "100%" }}
    >
      <Container fluid style={{ padding: "3px", margin: "0px 1.5rem" }}>
        <Navbar.Toggle
          className="d-flex d-sm-none "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{border:"0px"}}
          onClick={sideBarHandler}
        >
          <i className="bi bi-list" style={{ fontSize: "23px" }} />
        </Navbar.Toggle>
        <span className="navigation-title ">
          <img src={logo} alt="main logo" width="42" height="42" className="" />
          <div className="mx-3 d-none d-sm-block " style={{fontSize:"1.1rem"}}>ECRARM Dashboard</div>
        </span>
        {/* <span className="navigation-title d-sm-none ">
          <img src={logo} alt="main logo" width="32" height="32" className="" />
        </span> */}
        <LoginLogo />
        <Navbar.Collapse id="navbarsExample03" className="d-sm-none">
          {toggleMenu}
        </Navbar.Collapse>
      </Container>
    </Nav>
  );
};

export default Navigation;
