import React, { useCallback, useEffect, useRef } from "react";

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
  const sendingMessage = useSelector((state) => state.websocket.sendingMessage);
  const ws = useRef(null); //useRef ws객체 할당
  const webSocketUrl = "ws://155.230.25.98:8888";
  const dispatch = useDispatch();
  // const webSocketUrl = "ws://127.0.0.1:8888";

  // websocket 연결 try
  const webSocketHandler = useCallback(() => {
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
  },[dispatch]);

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
  }, [webSocketHandler]);

  // 웹소켓 연결 버튼 관련 로직
  useEffect(()=>{

  },[webSocketHandler])

  // 웹 소켓 서버에 메세지 보내는 로직
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



  return (
    <>
    </>
  );
};

export default WebSocketComponent;
