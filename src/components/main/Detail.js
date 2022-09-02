import React from "react";
import { useContext } from "react";
import { WebSocketContext } from "../websocket/websocket";
import { Spinner, ProgressBar } from "react-bootstrap";
import './Detail.css'

const Detail = ({ style }) => {
  const ws = useContext(WebSocketContext)
  console.log(ws)
  const now = 60;
  return <div style={style}>
    Detail
    <div>progress</div>
    
      <ProgressBar animated now={now} label={`${now}%`} />
    
    <div className="detail-row">
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
    </div>

  </div>;
};

export default Detail;
