import React from "react";

const ControlPanel = ({ style }) => {
  return (
    <>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Raspberry Pi CNC [BETA]
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div
                  title="Server Connection"
                  id="ws-status"
                  className="led-red"
                ></div>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-default"
                  style={{ margin: "10px" }}
                  id="settings_btn"
                >
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div className="table-layout">
          <div className="table-cell fixed-width-cell">
            {/* <!--
            <select id="choosePort" className="form-control">
                <option val="no">Select a serial port</option>
            </select>
            --> */}
            {/* <h5 id="mStatus" style={{text-align: right;">
              Select Port
            </h5> */}
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li id="mpA">
                <a id="mpC" href="#">
                  Machine Position
                </a>
              </li>
              <li id="wpA" className="active">
                <a id="wpC" href="#">
                  Working Position
                </a>
              </li>
            </ul>
            <br />
            <div id="mPosition" style={{ display: "none" }}>
              <center>
                <div
                  id="mX"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  X: 0.000
                </div>
                <div
                  id="mY"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  Y: 0.000
                </div>
                <div
                  id="mZ"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  Z: 0.000
                </div>
              </center>
            </div>
            <div id="wPosition">
              <center>
                <div
                  id="wX"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  X: 0.000
                </div>
                <div
                  id="wY"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  Y: 0.000
                </div>
                <div
                  id="wZ"
                  style={{
                    textAlign: "left",
                    paddingLeft: "15px",
                    margin: "4px",
                    fontSize: "30px",
                    width: "190px",
                    border: "1px solid #aaa",
                    fontWeight: "bold",
                  }}
                >
                  Z: 0.000
                </div>
              </center>
            </div>
            <center>
              {/* <div
                className="input-group"
                style={{ clear: "both", width: "250px", float: "left" }}
              >
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-sm btn-default"
                    id="sendReset"
                  >
                    RESET
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-default"
                    id="sendUnlock"
                  >
                    UNLOCK
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-default"
                    id="sendHome"
                  >
                    HOME
                  </button>
                </span>
              </div> */}
            </center>
            <center>
              <button
                type="button"
                className="btn btn-default"
                style={{ marginTop: "5px" }}
                id="sendZero"
              >
                Zero Machine (G92)
              </button>
            </center>
            <hr style={{ clear: "both" }} />
            <select className="form-control" id="jogSpeed">
              <option value="1500">Feed Rate: 1500</option>
              <option value="1000">Feed Rate: 1000</option>
              <option defaultValue={"500"}>Feed Rate: 500</option>
              <option value="100">Feed Rate: 100</option>
              <option value="5">Feed Rate: 5</option>
            </select>
            <select className="form-control" id="jogSize">
              <option value=".5">Distance: .5</option>
              <option defaultValue={"1"}>Distance: 1</option>
              <option value="2">Distance: 2</option>
              <option value="5">Distance: 5</option>
              <option value="10">Distance: 10</option>
              <option value="20">Distance: 20</option>
            </select>
            <br style={{ clear: "both" }} />
            {/* <center>
              <container>
                <block
                  blk=""
                  className="btn btn-default"
                  style={{visibility: hidden;"
                >
                  -
                </block>
                <block blk="" id="yP" className="btn btn-default">
                  +Y
                </block>
                <block
                  blk=""
                  className="btn btn-default"
                  style={{visibility: hidden;"
                >
                  -
                </block>
                <block blk="" id="zP" className="btn btn-default">
                  +Z
                </block>

                <block blk="" id="xM" className="btn btn-default">
                  -X
                </block>
                <block blk="" id="zero" className="btn btn-default">
                  <span
                    id="zero"
                    className="glyphicon glyphicon-screenshot"
                    aria-hidden="true"
                  ></span>
                </block>
                <block blk="" id="xP" className="btn btn-default">
                  +X
                </block>
                <block
                  blk=""
                  className="btn btn-default"
                  style={{visibility: hidden;"
                ></block>

                <block
                  blk=""
                  className="btn btn-default"
                  style={{visibility: hidden;"
                >
                  -
                </block>
                <block blk="" id="yM" className="btn btn-default">
                  -Y
                </block>
                <block
                  blk=""
                  className="btn btn-default"
                  style={{visibility: hidden;"
                >
                  -
                </block>
                <block blk="" id="zM" className="btn btn-default">
                  -Z
                </block>
              </container>
            </center>
            <br style={{clear: both;" />
            <center>
              <container>
                <block blk="" id="spnCW" className="btn btn-default">
                  CW
                </block>
                <block blk="" id="spnCCW" className="btn btn-default">
                  CCW
                </block>
                <block blk="" id="spn" className="btn btn-default">
                  Spindle
                </block>
                <block blk="" id="cool" className="btn btn-default">
                  Coolant
                </block>
              </container>
            </center>
            <br style={{clear: both;" />
            <center>
              <container>
                <block h2="" id="stopStart" className="btn btn-info">
                  Stop/Start
                </block>
                <block h2="" id="abort" className="btn btn-danger">
                  Abort
                </block>
              </container>
            </center> */}
            <hr style={{ clear: "both" }} />
            <span style={{ color: "#aaa", fontSize: ".8em" }} />
            <span style={{ color: "red" }}>axis step hotkeys:</span>
            WASD, up/down-arrow
          </div>
        </div>
        {/* <!--<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">--> */}

        {/* <div className="table-cell">
          <div id="renderArea"></div>
          <pre id="console"></pre>
          <br />
          <textarea
            style={{ height: "300px", width: "99%", overflow: "auto" }}
            id="command"
          ></textarea>

          <span style={{ fontStyle: "italic" }}>
            Drag a .gcode or .nc file to the command box or click Upload GCODE
            to upload it.
          </span>

          <div
            className="input-group"
            style={{
              clear: "both",
              width: "300px",
              float: "right",
              textAlign: "right",
              marginTop: "10px",
            }}
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-default disabled"
              id="qStatus"
            >
              0/0
            </button>
            <button type="button" className="btn btn-default" id="pause">
              Pause
            </button>
            <button
              type="button"
              className="btn btn-default disabled"
              id="clearQ"
            >
              Clear Queue
            </button>
          </span>
        </div> */}

        <div style={{ clear: "both", float: "right", marginTop: "10px" }} />
        {/* <span className="btn btn-default btn-file">
          Load File
          <input type="file" id="fileInput" />
        </span> */}
        <button type="button" className="btn btn-default" id="sendCommand">
          Send to CNC (shift+enter)
        </button>
      </div>

      {/* <!-- Settings Modal --> */}
      <div
        className="modal fade"
        id="settings"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                Machine Settings
              </h4>
            </div>
            <div id="extraSettings">
              <center>
                <label>
                  {/* <input type="checkbox" value="" id="chk_singleCommandMode">
                    Single Command Mode Enabled
                  </input> */}
                </label>
              </center>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                id="btn-save-settings"
              >
                Export Settings
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
