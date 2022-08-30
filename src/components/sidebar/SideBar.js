import SmallSideBar from "./smallsidebar";
import BigSideBar from "./bigsidebar";
import "./SideBar.css";
import { Navbar } from "react-bootstrap";

const SideBar = ({ menuSelected, onMenuSelect, sideBar, sideBarHandler }) => {
  const sidebar = sideBar ? (
    <SmallSideBar menuSelected={menuSelected} onMenuSelect={onMenuSelect} />
  ) : (
    <BigSideBar menuSelected={menuSelected} onMenuSelect={onMenuSelect} />
  );
  const sidebarlogo = sideBar ? (
    <i
      className="bi bi-chevron-right"
      style={{ fontSize: "25px" }}
    ></i>
  ) : (
    <i
      className="bi bi-chevron-left"
      style={{ fontSize: "25px" }}
    ></i>
  );
  return (
    <div className="d-none d-sm-flex navbar-fluid flex-column flex-shrink-0 p-3 pt-0 text-white bg-dark">
      <div
        className="sticky-top pt-2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: `${sideBar ? "center" : "space-between"}`,
        }}
      >
        <div
          className="navbar navbar-dark bg-dark"
          style={{
            flexDirection: `${sideBar ? "column" : "row"}`,
            justifyContent: `${sideBar ? "center" : "space-between"}`,
            padding: "8px 0px 0px 0px",
          }}
        >
          <div></div>
          {!sideBar && (
            <div
              className="mx-2"
              style={{ fontSize: "21px", textAlign: "center" }}
            >
              ECRARM
            </div>
          )}
          <Navbar.Toggle
            type="button"
            aria-expanded="false"
            variant="outline-secondary"
            onClick={sideBarHandler}
            style={{ border: "0px", padding: "0px 0px 0px 0px" }}
          >
            {sidebarlogo}
            {/* <i className="bi bi-list" style={{ fontSize: "25px",margin:"6px" }}></i> */}
          </Navbar.Toggle>
        </div>
        {sidebar}
      </div>
    </div>
  );
};

export default SideBar;
