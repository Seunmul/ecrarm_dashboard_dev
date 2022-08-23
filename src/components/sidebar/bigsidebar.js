import React from "react";
import pica from "../../img/pica.jpg";

const bigsidebar = ({ menuSelected, onMenuSelect }) => {
  return (
    <div style={{ height: "354px" }}>
      <div
        style={{
          width: "20vw",
          maxWidth: "280px",
          minWidth: "266px",
          fontSize: "1.2rem",
        }}
      >
        <hr />
        <ul id="list" className="nav nav-pills flex-column mb-auto container">
          <li className="nav-item">
            <div className="nav-link active sidebar-icon">
              <i className="bi bi-house-door sidebar-icon-size"></i>
              Home / DashBoard
            </div>
          </li>
          <li>
            <div className="nav-link text-white sidebar-icon">
              <i className="bi bi-table sidebar-icon-size"></i>
              Detail Status
            </div>
          </li>
          <li>
            <div className="nav-link text-white sidebar-icon">
              <i className="bi bi-person-workspace sidebar-icon-size"></i>
              Control Panel
            </div>
          </li>
          <li>
            <div className="nav-link text-white sidebar-icon">
              <i className="bi bi-info-square sidebar-icon-size"></i>
              Information
            </div>
          </li>
        </ul>
        <hr />

        <div id="usermenu" className="dropdown">
          <div
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={pica}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Seunmul</strong>
          </div>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
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
    </div>
  );
};

export default bigsidebar;
