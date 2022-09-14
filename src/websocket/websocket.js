import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSendingMessage,
  updateWebSocketConnection,
  updateSystemStatus,
  updateReceivedDataList,
  setIsDataReceived,
} from "../reducer/websocketReducer";

const WebSocketComponent = () => {
  const webSocketConnectionStatus = useSelector(
    (state) => state.websocket.connectionStatus
  );
  const receivedData = useSelector((state) => state.websocket.data);
  const isDataReceived = useSelector((state) => state.websocket.isDataReceived);
  const sendingMessage = useSelector((state) => state.websocket.sendingMessage);

  const dispatch = useDispatch();

  const webSocketUrl = "ws://155.230.25.98:8888";
  // const webSocketUrl = "ws://127.0.0.1:8888";

  const ws = useRef(null); //useRef ws객체 할당

  // websocket 연결 try
  const webSocketHandler = () => {
    console.log("---\nopen socket");
    ws.current = new WebSocket(webSocketUrl);

    ws.current.onopen = () => {
      console.log("connected to " + webSocketUrl);
      dispatch(updateWebSocketConnection(Number(ws.current.readyState)));
      dispatch(updateSendingMessage("connect"));
    };
    ws.current.onerror = (error) => {
      console.log("connection error " + webSocketUrl);
      dispatch(updateWebSocketConnection(Number(ws.current.readyState)));
      console.log(error);
    };
    ws.current.onclose = (error) => {
      console.log("disconnect from " + webSocketUrl);
      dispatch(updateWebSocketConnection(Number(ws.current.readyState)));
      console.log(error);
    };
    ws.current.onmessage = (evt) => {
      const receivedData = JSON.parse(evt.data);
      console.log(receivedData);
      dispatch(setIsDataReceived(true));
      dispatch(updateSystemStatus(receivedData));
      dispatch(updateReceivedDataList(receivedData));
    };
  };
  // 시작버튼 이벤트 핸들러
  const startButtonClickHandler = async () => {
    if (webSocketConnectionStatus === 1 && isDataReceived) {
      console.log("\n----start button clicked----");
      dispatch(setIsDataReceived(false));
      dispatch(updateSendingMessage("start"));
    }
  };
  // 멈춤버튼 이벤트 핸들러
  const stopButtonClickHandler = async () => {
    if (webSocketConnectionStatus === 1 && isDataReceived) {
      console.log("\n----stop button clicked----");
      dispatch(setIsDataReceived(false));
      dispatch(updateSendingMessage("stop"));
    }
  };
  // 소켓 열기 버튼 이벤트 핸들러
  const openButtonClickHandler = () => {
    if (webSocketConnectionStatus === ws.current.CLOSED) webSocketHandler();
  };
  // 소켓 닫기 버튼 이벤트 핸들러
  const closeButtonClickHandler = () => {
    if (webSocketConnectionStatus === ws.current.OPEN) {
      console.log("close socket");
      ws.current.close();
    }
  };

  // 첫 화면 로딩 시 소켓 객체 생성
  useEffect(() => {
    if (!ws.current) {
      webSocketHandler();
    }
    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  useEffect(() => {
    if (ws.current && ws.current.readyState === ws.current.OPEN) {
      ws.current.send(
        JSON.stringify({
          data: String(sendingMessage),
        })
      );
      console.log(`sended to websocket server : ${sendingMessage}`);
    }
  }, [sendingMessage]);

  const systemControlButton =
    webSocketConnectionStatus === 1 &&
    (receivedData.status === "waiting" ||
      receivedData.status === "initializing") ? (
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
      {/* <Button className="my-2" onClick={openButtonClickHandler}>
        open socket
      </Button>
      <Button className="my-2" onClick={closeButtonClickHandler}>
        close socket
      </Button> */}
      {/* <div>Status : {`, system status-${receivedData.status}`}</div>
      <div>res : </div>
      {webSocketConnectionStatus === 1 && systemControlButton} */}
    </>
  );
};

export default WebSocketComponent;
