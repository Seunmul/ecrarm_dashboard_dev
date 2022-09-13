import React from "react";
import DashCardList from "../card/DashCardList";
import {
  Stack,
  Button,
  Alert,
  Badge,
  Container,
  Accordion,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import Sampletxt from "../Sampletxt";

import "./DashBoard.css";
const DashBoard = () => {
  const webSocketConnectionStatus = useSelector(
    (state) => state.websocket.connectionStatus
  );
  const receivedData = useSelector((state) => state.websocket.data);

  let connectionStatusBadge = <div></div>;
  switch (webSocketConnectionStatus) {
    case 1:
      connectionStatusBadge = (
        <Badge bg="success me-2" style={{ fontSize: "15px" }}>
          connected
        </Badge>
      );
      break;
    case 2:
      connectionStatusBadge = (
        <Badge bg="warning me-2" style={{ fontSize: "15px" }}>
          connecting...
        </Badge>
      );
      break;
    default:
      connectionStatusBadge = (
        <Badge bg="danger me-2" style={{ fontSize: "15px" }}>
          not connected
        </Badge>
      );
      break;
  }

  let systemStatusBadge = <div></div>;
  switch (receivedData.status) {
    case "initializing":
      systemStatusBadge = (
        <Badge bg="secondary me-2" style={{ fontSize: "15px" }}>
          initializing...
        </Badge>
      );
      break;
    case "waiting":
      systemStatusBadge = (
        <Badge bg="success me-2" style={{ fontSize: "15px" }}>
          waiting...
        </Badge>
      );
      break;
    case "detecting":
      systemStatusBadge = (
        <Badge bg="primary me-2" style={{ fontSize: "15px" }}>
          detecting...
        </Badge>
      );
      break;
    case "detecting_finished":
      systemStatusBadge = (
        <Badge bg="primary me-2" style={{ fontSize: "15px" }}>
          detecting finished
        </Badge>
      );
      break;
    case "controlling":
      systemStatusBadge = (
        <Badge bg="primary me-2" style={{ fontSize: "15px" }}>
          controlling...
        </Badge>
      );
      break;
    case "controlling_finished":
      systemStatusBadge = (
        <Badge bg="primary me-2" style={{ fontSize: "15px" }}>
          controlling finished
        </Badge>
      );
      break;
    case "stopping":
      systemStatusBadge = (
        <Badge bg="warning me-2" style={{ fontSize: "15px" }}>
          stopping...
        </Badge>
      );
      break;
    default:
      systemStatusBadge = (
        <Badge bg="danger me-2" style={{ fontSize: "15px" }}>
          error
        </Badge>
      );
      break;
  }

  return (
    <>
      <Container fluid>
        <Row id="1st-row">
          <Col id="1st-col">
            <Alert
              key={"success"}
              variant={"success"}
              style={{
                minWidth: "300px",
              }}
            >
              <Container fluid>
                <Row>
                  <Col style={{ fontWeight: "bold", fontSize: "25px" }}>
                    ECRARM DASHBOARD
                  </Col>
                  <hr style={{ margin: "8px 0px" }} />
                  <Row className="my-1">
                    <Col style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      {" "}
                      - Connection : {connectionStatusBadge}
                    </Col>
                  </Row>
                  <Row className="my-1">
                    <Col style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      {" "}
                      - System : {systemStatusBadge}
                    </Col>
                  </Row>
                </Row>
              </Container>
            </Alert>
          </Col>
          <Col id="2nd-col">
            <Accordion style={{ maxWidth: "300px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Control Buttons</Accordion.Header>
                <Accordion.Body className="dash-button-area">
                  <div className="dash-buttons">
                    <Button
                      className="mx-2 dash-button"
                      variant="outline-success "
                    >
                      Start Classification
                    </Button>
                    <Button
                      className="mx-2 dash-button"
                      variant="outline-danger"
                    >
                      Stop
                    </Button>
                    <Button
                      className="mx-2 dash-button"
                      variant="outline-warning"
                    >
                      Restart
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  {bootStrapTest}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row id="2nd-row">
          <DashCardList />
        </Row>
        <Row id="3th-row">
          <Sampletxt />
          {/* {bootStrapTe st} */}
        </Row>
      </Container>
    </>
  );
};

export default DashBoard;

const bootStrapTest = (
  <>
    <Stack direction="horizontal" gap={2}>
      <Button as="div" variant="primary">
        Button as link
      </Button>
      <Button as="div" variant="success">
        Button as link
      </Button>
    </Stack>
    {[
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        This is div {variant} alert—check it out!
      </Alert>
    ))}
  </>
);
