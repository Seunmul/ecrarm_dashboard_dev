import React from "react";
import DashCardList from "../card/DashCardList";
import { Stack, Button, Alert } from "react-bootstrap";
import Sampletxt from "../Sampletxt";
import WebSocket from "../websocket/websocket";
import "./DashBoard.css";

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
const DashBoard = () => {
  return (
    <>
      <h2 className="dash-header">-----</h2>
      {/* <Sampletxt /> */}
      <WebSocket></WebSocket>
      <div className="dash-button-area">
        <div className="dash-buttons">
          <Button className="mx-2 dash-button" variant="outline-success ">
            Start Classification
          </Button>
          <Button className="mx-2 dash-button" variant="outline-danger">
            Stop
          </Button>
          <Button className="mx-2 dash-button" variant="outline-warning">
            Restart
          </Button>
        </div>
      </div>
      
      <DashCardList />
      {bootStrapTest}
      <Sampletxt />
    </>
  );
};

export default DashBoard;
