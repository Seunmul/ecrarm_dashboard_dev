import React, { useState } from "react";
import SmallSideBar from "./smallsidebar";
import BigSideBar from "./bigsidebar";
import "./SideBar.css";

const SideBar = ({ menuSelected, onMenuSelect }) => {
  const [sideBar, setSideBarSmall] = useState(false);

  const sideBarHandler = () => {
    setSideBarSmall(!sideBar);
  };

  const selectSidebar = sideBar ? (
    <SmallSideBar menuSelected={menuSelected} onMenuSelect={onMenuSelect} />
  ) : (
    <BigSideBar menuSelected={menuSelected} onMenuSelect={onMenuSelect}/>
  );

  return (
    <div className="d-none d-sm-block navbar-fluid d-flex flex-column flex-shrink-0 p-3 pt-0 text-white bg-dark">
      <div
        className="sticky-top pt-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: `${sideBar ? "center" : "flex-start"}`,
        }}
      >
        <div
          className="navbar navbar-dark bg-dark"
          style={{
            flexDirection: `${sideBar ? "column" : "row"}`,
            justifyContent: `${sideBar ? "center" : "flex-start"}`,
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-controls=" "
            onClick={sideBarHandler}
          >
            <i className="bi bi-list" style={{ fontSize: "30px" }} />
          </button>

          {!sideBar && (
            <div className="mx-3" style={{ fontSize: "25px" }}>
              Menu
            </div>
          )}
        </div>
        {selectSidebar}
      </div>
    </div>
  );
};

export default SideBar;
