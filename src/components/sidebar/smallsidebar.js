import React from "react";
import { Nav } from "react-bootstrap";

const SmallSideBar = ({ menuSelected, onMenuSelect }) => {
  const icons = [
    <i className="bi bi-house-door small-sidebar-icon-size" />,
    <i className="bi bi-table small-sidebar-icon-size" />,
    <i className="bi bi-person-workspace small-sidebar-icon-size" />,
    <i className="bi bi-info-square small-sidebar-icon-size " />,
  ];
  const linkIcons = icons.map((icon, i) => {
    return (
      <Nav.Item key={i} className="" as="li">
        <Nav.Link
          style={{ display: "flex" }}
          className={`small-sidebar-icon text-white ${
            menuSelected === i && "active"
          }`}
          href={`/#`}
          eventKey={`${i}`}
        >
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
      
    </div>
  );
};

export default SmallSideBar;
