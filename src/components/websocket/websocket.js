import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";

// Provider
const WebSocketDataProvider = ({ children }) => {
  const [webSocketConnected, setWebSocketConnected] = useState(false);
  const [webSocketStatus, setWebSocketStatus] = useState(0);
  const [webSocketStatusMsg, setWebSocketStatusMsg] = useState("");
  const [systemStatus, setSystemStatus] = useState("");
  const [isDataReceived, setIsDataReceived] = useState(false);
  const [receivedDataList, setReceivedDataList] = useState([]);
  const [isDetectionRunning, setDetectionRunning] = useState(false);

  const webSocketUrl = "ws://155.230.25.98:8888";
  const ws = useRef(null); //useRef ws객체 할당

  // websocket 연결 try
  const connectWebSocket = () => {
    console.log("---\nopen socket");
    ws.current = new WebSocket(webSocketUrl);
    setWebSocketStatus(0);
    ws.current.onopen = () => {
      console.log("connected to " + webSocketUrl);
      setWebSocketConnected(true);
      setWebSocketStatus(ws.current.readyState);
    };
    ws.current.onerror = (error) => {
      console.log("connection error " + webSocketUrl);
      setWebSocketConnected(false);
      setWebSocketStatus(ws.current.readyState);
      console.log(error);
    };
    ws.current.onclose = (error) => {
      console.log("disconnect from " + webSocketUrl);
      setWebSocketConnected(false);
      setWebSocketStatus(ws.current.readyState);
      console.log(error);
    };
    ws.current.onmessage = (evt) => {
      const data = JSON.parse(evt.data);
      console.log(data);

      setIsDataReceived(true);
      setReceivedDataList((prevItems) => [
        ...prevItems,
        data,
      ]);
      setSystemStatus(data.status)
    };
  };

  const startButtonClickHandler = async () => {
    if (webSocketConnected && isDataReceived) {
      ws.current.send(
        JSON.stringify({
          data: "start",
        })
      );
      setDetectionRunning(true);
      setIsDataReceived(false);
    }
  };

  const stopButtonClickHandler = async () => {
    if (webSocketConnected && isDataReceived) {
      // print(ws.current.onmessage)
      await ws.current.send(
        JSON.stringify({
          data: "stop",
        })
      );
      setDetectionRunning(false);
      setIsDataReceived(false);
    }
  };

  const openButtonClickHandler = () => {
    if (webSocketStatus === 3) connectWebSocket();
  };

  const closeButtonClickHandler = () => {
    if (webSocketStatus === 1) {
      console.log("close socket");
      ws.current.close();
    }
  };

  // 소켓 객체 생성
  useEffect(() => {
    if (!ws.current) connectWebSocket();
    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  // 소켓 연결 상태별 메소드 설정
  useEffect(() => {
    if (ws.current) {
      switch (webSocketStatus) {
        case ws.current.CONNECTING: //webSocketStatus === 0
          setWebSocketStatusMsg("connecting");
          break;
        case ws.current.OPEN:
          setWebSocketStatusMsg("open : connected");
          ws.current.send(
            JSON.stringify({
              data: "connect",
            })
          );
          break;
        case ws.current.CLOSING:
          setWebSocketStatusMsg("closing");
          break;
        case ws.current.CLOSED:
          setWebSocketStatusMsg("not connected");
          break;
        default:
          setWebSocketStatusMsg("something wrong, error");
          break;
      }
      return () => {
        console.log("connection updated");
      };
    }
  }, [webSocketStatus]);

  const detectionControlBtn =
    webSocketConnected && !isDetectionRunning ? (
      <button style={{ color: "blue" }} onClick={startButtonClickHandler}>
        start
      </button>
    ) : (
      <button style={{ color: "red" }} onClick={stopButtonClickHandler}>
        stop
      </button>
    );

  return (

    <>
      <hr></hr>
      <Button className="my-2" onClick={openButtonClickHandler}>
        open socket
      </Button>
      <Button className="my-2" onClick={closeButtonClickHandler}>
        close socket
      </Button>
      <hr></hr>
      <div>Status : {`connection-${webSocketStatusMsg} , system status-${systemStatus}`}</div>
      <div>res : </div>
      <div>
        {webSocketConnected && detectionControlBtn}
        {receivedDataList.map((item, index) => {
          return <div key={index}>{JSON.stringify(item)}</div>;
        })}
      </div>
    </>

  );
};

export default WebSocketDataProvider;
