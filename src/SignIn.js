import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "./components/SignIn/UI/Input_si";
import Btn from "./components/SignIn/UI/Btn_si_mj";
import ValidMsg from "./components/SignIn/UI/ValidMsg";

import styles from "./SignIn.module.css";

const SignIn = () => {
  const [isValid, setIsValid] = useState(true);

  const validHandler = () => {
    setIsValid(!isValid);
  };

  return (
    <>
      <div className={styles["sign-in"]}>
        <div className={styles["sign-in-loginbox"]}>
          <div
            className={styles["sign-in-title"]}
            style={{ margin: "60px 0px 38px 0px" }}
          >
            {/* <img
            className="mx-3"
            src={process.env.PUBLIC_URL + '/img/ecrarm-logo.png'}
            width="70" height="70"
          alt="ecrarm-logo" /> */}

            <img
              src={process.env.PUBLIC_URL + "/img/ecrarm-title3.png"}
              width="250"
              height="50"
              alt="ecrarm-title"
            />
          </div>

          <Input title="아이디" type="text" placeholder="아이디를 입력하세요" />
          <Input
            title="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
          >
            <ValidMsg check={isValid}>
              아이디 혹은 비밀번호를 확인해주세요.
            </ValidMsg>
          </Input>
          <Link to="/" style={{ textDecorationLine: "none", color: "black" }}>
            <Btn style={{ marginTop: "24px" }} onClick={{ validHandler }}>
              로그인
            </Btn>
          </Link>

          <div className={styles["rq-msg"]}>
            <span style={{ marginRight: "3px" }}>
              관리자 계정이 없으시다면 ?
            </span>
            <Link to="/SignUp">
              <span style={{ color: "#4981F2" }}>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
      <footer
        className="d-flex flex-wrap align-items-center py-3 px-3 border-top"
        style={{
          justifyContent: "space-around",
        }}
      >
        <div className="d-flex" 
        style={{minWidth:"250px", minHeight:"60px",display:"flex",flexDirection:"column"}}>
          <strong style={{ fontSize: "1.3rem" }}>ECRARM</strong>
          Element Classification Robot Arm
        </div>
        <div
          className="d-flex text-muted"
          style={{
            fontSize: "12px",
            justifyContent: "flex-start",
            justifyItems: "flex-start",
            alignItems: "center",
            alignContent: "center",
            minWidth:"250px",
            minHeight:"60px"

          }}
        >
          2022 Hanium ICT공모전 / 22hf_182 <br /> 
          © 김영희.박건하.이희원.차우석 all right reserved
        </div>
      </footer>
    </>
  );
};

export default SignIn;
