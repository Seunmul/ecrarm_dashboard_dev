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
  const toggleBtn = (
    <div
      style={{
        display: "flex",
        justifyContent: `${sideBar ? "center" : "flex-end"}`,
        alignContent: "center",
      }}
    >
      {sideBar ? (
        <i
          className="bi bi-chevron-right toggleBtn toggleBtn:hover"
          style={{ fontSize: "25px" }}
          onClick={sideBarHandler}
        ></i>
      ) : (
        <i
          className="bi bi-chevron-left toggleBtn toggleBtn:hover"
          style={{ fontSize: "25px" }}
          onClick={sideBarHandler}
        ></i>
      )}
    </div>
  );
  return (
    <div className="d-none d-sm-flex navbar-fluid flex-column flex-shrink-0 p-3 pt-0 text-white bg-dark">
      <div
        className="sticky-top pt-2"
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
            padding: "8px 0px 0px 0px",
          }}
        >
          <Navbar.Toggle
            className="toggleBtn toggleBtn:hover"
            type="button"
            aria-expanded="false"
            variant="outline-secondary"
            onClick={sideBarHandler}
            style={{ border: "0px" }}
          >
            <i
              className="bi bi-list"
              style={{ fontSize: "31px", margin: "1px" }}
            ></i>
          </Navbar.Toggle>
          {!sideBar && (
            <div
              className="mx-2"
              style={{ fontSize: "21px", textAlign: "center" }}
            >
              ECRARM
            </div>
          )}
        </div>
        {sidebar}
        {toggleBtn}
      </div>
    </div>
  );
};

export default SideBar;
