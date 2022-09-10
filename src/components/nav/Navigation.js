import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { IconContext } from "../icon/icon-context";
import LoginLogo from "../icon/loginlogo";
import NavHeader from "./NavHeader";
import "./Navigation.css";

const Navigation = ({
  menuSelected,
  onMenuSelect,
  sideBar,
  sideBarHandler,
}) => {
  const icons = useContext(IconContext);
  const linkIcons = icons.map((icon, i) => {
    return (
      <Nav.Item
        className={`navigation-item navigation-item:hover my-1
        ${menuSelected === i && "navigation-item-current"}
        `}
        key={i}
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        as="li"
      >
        <Nav.Link
          aria-current="page"
          id={`navigation-icon`}
          href={`/App#`}
          eventKey={`${i}`}
        >
          {icon.logo}
          <div className="mx-2">{icon.name}</div>
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
      <Nav.Item
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        as="li"
      >
        <hr />
        {/* <div
          className="my-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/ecrarm-title3.png"}
            alt="main logo"
            width="145"
            height="27"
            className="mx-3"
          />
        </div> */}
      </Nav.Item>
      {linkIcons}
      {/* <hr /> */}
    </Nav>
  );

  return (
    <>
      <Nav
        className="navbar sticky-top bg-light"
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
            style={{ border: "0px" }}
            onClick={sideBarHandler}
            >
            <i className="bi bi-list" style={{ fontSize: "23px" }} />
          </Navbar.Toggle>
          <NavHeader menuSelected={menuSelected} />
          <LoginLogo />
          <Navbar.Collapse id="navbarsExample03" className="d-sm-none">
            {toggleMenu}
          </Navbar.Collapse>
        </Container>

      </Nav>
    </>
  );
};

export default Navigation;
