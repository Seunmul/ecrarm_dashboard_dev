import React from "react";
import { Nav } from "react-bootstrap";

const BigSideBar = ({ menuSelected, onMenuSelect }) => {
  const icons = [
    {
      logo: <i className="bi bi-house-door sidebar-icon-size" />,
      name: "Home / Dashboard",
    },
    {
      logo: <i className="bi bi-table sidebar-icon-size   " />,
      name: "Detail Information",
    },
    {
      logo: <i className="bi bi-person-workspace sidebar-icon-size" />,
      name: "Control Panel",
    },
    {
      logo: <i className="bi bi-info-square sidebar-icon-size " />,
      name: "Program Info",
    },
  ];
  const linkIcons = icons.map((icon, i) => {
    return (
      <Nav.Item key={i} className="" as="li">
        <Nav.Link
          style={{ display: "flex" }}
          className={`sidebar-icon text-white ${
            menuSelected === i && "active"
          }`}
          href={`/#`}
          eventKey={`${i}`}
        >
          {icon.logo}
          <div>{icon.name}</div>
        </Nav.Link>
      </Nav.Item>
    );
  });
  return (
    <div className="sidebar">
      <hr />
      <Nav
        variant="pills"
        className="flex-column flex-column mb-auto container"
        defaultActiveKey="/"
        as="ul"
        onSelect={(selectedKey) => {
          onMenuSelect(selectedKey);
        }}
      >
        {linkIcons}
      </Nav>
      <hr />
    </div>
  );
};

export default BigSideBar;
