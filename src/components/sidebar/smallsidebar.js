import React from "react";
import pica from "../../img/pica.jpg";
import { Nav } from "react-bootstrap";

const SmallSideBar = ({ menuSelected, onMenuSelect }) => {
  const icons = [
    <i className="bi bi-house-door small-sidebar-icon-size" />,
    <i className="bi bi-table small-sidebar-icon-size" />,
    <i className="bi bi-person-workspace small-sidebar-icon-size" />,
    <i className="bi bi-info-square small-sidebar-icon-size " />,
  ];
  // console.log(menuSelected);
  // console.log(typeof menuSelected);
  const linkIcons = icons.map((icon, i) => {
    const linkIconStyles =
      menuSelected === i
        ? "small-sidebar-icon active text-white"
        : "small-sidebar-icon text-white";
    return (
      <Nav.Item key={i} className="small-sidebar " as="li">
        <Nav.Link className={`${linkIconStyles}`} eventKey={`${i}`}>
          {icon}
        </Nav.Link>
      </Nav.Item>
    );
  });
  return (
    <div className="small-sidebar">
      <hr />
      <Nav
        variant="pills"
        className="flex-column justify-items-center text-center mb-auto small-sidebar"
        defaultActiveKey="/"
        as="ul"
        onSelect={(selectedKey) => {
          onMenuSelect(selectedKey);
        }}
      >
        {linkIcons}
      </Nav>
      <hr />
      <div
        className="dropdown"
        style={{ flexDirection: "column", height: "35px" }}
      >
        <div
          className="d-flex align-items-center justify-content-center text-center p-3 link-light text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ height: "32px" }}
        >
          <img
            src={pica}
            alt="picachu logo"
            width="32"
            height="32"
            className="rounded-circle me-2 "
          />
        </div>
        <ul
          className="dropdown-menu text-small"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <div className="dropdown-item">New project...</div>
          </li>
          <li>
            <div className="dropdown-item">Settings</div>
          </li>
          <li>
            <div className="dropdown-item">Profile</div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <div className="dropdown-item">Sign out</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallSideBar;
