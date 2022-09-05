import React, { useEffect, useState, useRef, createContext } from "react";
import { Button } from "react-bootstrap";

// Context
export const WebSocketContext = createContext({});

// Provider
const WebSocketDataProvider = ({ children }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [socketStatus, setSocketStatus] = useState(0);
  const [socketStatusMsg, setSocketStatusMsg] = useState("")
  const [recivedMsg, setRecivedMsg] = useState(false);
  const [isDetectionRunning, setDetectionRunning] = useState(false);
  const [receivedMessageList, setReceivedMessageList] = useState([]);

  const webSocketUrl = "ws://155.230.25.98:8888"
  const ws = useRef(null); //useRef ws객체 할당

  // websocket 연결 try
  const connectWebSocket = () => {
    console.log("---\nopen socket")
    ws.current = new WebSocket(webSocketUrl);
    setSocketStatus(0);
    ws.current.onopen = () => {
      console.log("connected to " + webSocketUrl);
      setSocketConnected(true);
      setSocketStatus(ws.current.readyState)
    };
    ws.current.onerror = (error) => {
      console.log("connection error " + webSocketUrl);
      setSocketConnected(false);
      setSocketStatus(ws.current.readyState)
      console.log(error);
    };
    ws.current.onclose = (error) => {
      console.log("disconnect from " + webSocketUrl);
      setSocketConnected(false);
      setSocketStatus(ws.current.readyState)
      console.log(error);
    };
    ws.current.onmessage = (evt) => {
      const data = evt.data;
      console.log(JSON.parse(data));
      setRecivedMsg((prev) => data);
      setReceivedMessageList((prevItems) => [...prevItems, data]);
    };
  }
  const startButtonClickHandler = async () => {
    if (socketConnected && recivedMsg) {
      ws.current.send(
        JSON.stringify({
         data: "Start",
        })
      );
      setDetectionRunning(true);
      setRecivedMsg(false);
    }
  };
  const stopButtonClickHandler = async () => {
    if (socketConnected && recivedMsg) {
      // print(ws.current.onmessage)
      await ws.current.send(
        JSON.stringify({
          data: "Stop",
        })
      );
      setDetectionRunning(false);
      setRecivedMsg(false);
    }
  };
  const openButtonClickHandler = () => {
    if (socketStatus === 3)
      connectWebSocket();
  }
  const closeButtonClickHandler = () => {
    if (socketStatus === 1) {
      console.log("close socket");
      ws.current.close();
    }
  };

  // 소켓 객체 생성
  useEffect(() => {
    if (!ws.current)
      connectWebSocket();
    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  // 소켓 연결 상태별 메소드 설정
  useEffect(() => {
    if (ws.current) {
      switch (socketStatus) {
        case ws.current.CONNECTING: //socketStatus === 0
          setSocketStatusMsg("connecting")
          break;
        case ws.current.OPEN:
          setSocketStatusMsg("open : connected")
          ws.current.send(
            JSON.stringify({
              data: "connect",
            })
          );
          break;
        case ws.current.CLOSING:
          setSocketStatusMsg("closing")
          break;
        case ws.current.CLOSED:
          setSocketStatusMsg("not connected")
          break;
        default:
          setSocketStatusMsg("something wrong, error")
          break;
      }
      return () => {
        console.log("connection updated");

      };
    }
  }, [socketStatus]);

  const detectionControlBtn =
    !isDetectionRunning && recivedMsg ? (
      <button style={{ color: "blue" }} onClick={startButtonClickHandler}>
        start
      </button>
    ) : (
      <button style={{ color: "red" }} onClick={stopButtonClickHandler}>
        stop
      </button>
    );

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
      <>
        <hr></hr>
        <Button className="my-2" onClick={openButtonClickHandler}>open socket</Button>
        <Button className="my-2" onClick={closeButtonClickHandler}>close socket</Button>
        <hr></hr>
        <div>socket status - {`${socketStatusMsg}`}</div>
        <div>res : </div>
        <div>
          {socketConnected && detectionControlBtn}
          {receivedMessageList
            .map((item, index) => {
              return <div key={index}>{JSON.stringify(item)}</div>;
            })}
        </div>
      </>
    </WebSocketContext.Provider>
  );
};

export default WebSocketDataProvider;

