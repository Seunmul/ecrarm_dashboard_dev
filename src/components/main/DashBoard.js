import React from "react";
import {
  // Stack,
  Button,
  Alert,
  Badge,
  Container,
  Accordion,
  Row,
  Col,
  Card,
  Nav,
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
        <Badge bg="warning me-2" style={{ fontSize: "15px" }}>
          detecting...
        </Badge>
      );
      break;
    case "detecting_finished":
      systemStatusBadge = (
        <Badge bg="warning me-2" style={{ fontSize: "15px" }}>
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

  const detectSystemStatusBadge = receivedData.Detector.connect ? (
    <Badge bg="success me-2" style={{ fontSize: "15px" }}>
      connected
    </Badge>
  ) : (
    <Badge bg="danger me-2" style={{ fontSize: "15px" }}>
      not connected
    </Badge>
  );

  const controlSystemStatusBadge = receivedData.Controller.connect ? (
    <Badge bg="success me-2" style={{ fontSize: "15px" }}>
      connected
    </Badge>
  ) : (
    <Badge bg="danger me-2" style={{ fontSize: "15px" }}>
      not connected
    </Badge>
  );

  return (
    <Container fluid>
      <Row id="1st-row">
        <Col id="1-1st-col">
          <Alert
            key={"success"}
            variant={"success"}
            style={{
              minWidth: "335px",
            }}
          >
            <Container fluid>
              <Row>
                <Col style={{ fontWeight: "bold", fontSize: "25px" }}>
                  ECRARM DASHBOARD
                </Col>
                <hr style={{ margin: "8px 0px" }} />
                <Row className="my-1">
                  <Col style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    - Connection : {connectionStatusBadge}
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    - System : {systemStatusBadge}
                  </Col>
                </Row>
              </Row>
            </Container>
          </Alert>
        </Col>
        <Col
          id="1-2nd-col"
          style={{
            minWidth: "335px",
          }}
        >
          <Alert
            key={"primary"}
            variant={"primary"}
            style={{
              minWidth: "335px",
            }}
          >
            <Container fluid>
              <Row>
                <Col style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Other System Status
                </Col>
                <hr style={{ margin: "8px 0px" }} />
                <Row className="my-1">
                  <Col style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    - Detector : {detectSystemStatusBadge}
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    {" "}
                    - Controller : {controlSystemStatusBadge}
                  </Col>
                </Row>
              </Row>
            </Container>
          </Alert>
        </Col>
      </Row>

      <Row
        id="2nd-row"
        style={{
          minHeight: "390px",
        }}
      >
        <Col style={{ margin: "10px 0px" }}>
          <Accordion
            defaultActiveKey={["0"]}
            style={{
              minWidth: "335px",
            }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Quick Control Buttons</h5>
              </Accordion.Header>
              <Accordion.Body className="dash-button-area">
                <div className="dash-buttons">
                  <Button
                    className="mx-2 dash-button"
                    variant="outline-success "
                  >
                    Start Classification
                  </Button>
                  <Button className="mx-2 dash-button" variant="outline-danger">
                    Stop
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Socket Connection Control</h5>
              </Accordion.Header>
              <Accordion.Body className="dash-button-area">
                <div className="dash-buttons">
                  <Button
                    className="mx-2 dash-button"
                    variant="outline-primary "
                  >
                    Open Socket
                  </Button>
                  <Button className="mx-2 dash-button" variant="outline-dark">
                    Close Socket
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col style={{ margin: "10px 0px" }}>
          <Accordion
            defaultActiveKey={["0", "1"]}
            alwaysOpen
            style={{
              minWidth: "390px",
            }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Detection Data</h5>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  Detected Class :{" "}
                  {JSON.stringify(receivedData.Detector.data.class)}{" "}
                </div>
                <div>
                  Element Accord_X :{" "}
                  {JSON.stringify(receivedData.Detector.data.x)}
                </div>
                <div>
                  Element Accord_Y :{" "}
                  {JSON.stringify(receivedData.Detector.data.y)}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>Axis Data</h5>
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  X_Axis:{JSON.stringify(receivedData.Controller.data.X_Axis)}
                </div>
                <div>
                  Y_Axis:{JSON.stringify(receivedData.Controller.data.Y_Axis)}
                </div>
                <div>
                  Z_Axis:{JSON.stringify(receivedData.Controller.data.Z_Axis)}
                </div>
                <div>
                  W_Axis:{JSON.stringify(receivedData.Controller.data.W_Axis)}
                </div>
                <div>
                  R_Axis:{JSON.stringify(receivedData.Controller.data.R_Axis)}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col style={{ margin: "10px 0px" }}>
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            style={{
              minWidth: "335px",
            }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Another Data</h5>
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row id="3th-row">
        <Col
          style={{
            marginTop: "15px",
          }}
        >
          <Card>
            <Card.Header>
              <h5
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignFont: "center",
                  padding: "6px 0px",
                }}
              >
                Graphical Status
              </h5>
            </Card.Header>
            <Card.Header
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignFont: "center",
                padding: "6px 0px",
              }}
            >
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Detection Data</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#second">Axis Data</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#third">Running Time</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#fourth">Manipulator Status</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Graphical Data</Card.Title>
              <Card.Text as="div">
                <Sampletxt></Sampletxt>
              </Card.Text>
              <Button variant="success">OK</Button>
            </Card.Body>
            <Card.Footer>updated : latest</Card.Footer>
          </Card>
        </Col>

        {/* <DashCardList /> */}
      </Row>
    </Container>
  );
};

export default DashBoard;
