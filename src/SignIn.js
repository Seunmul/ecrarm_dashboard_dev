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
    <div className={styles["sign-in"]}>
      <div className={styles["sign-in-loginbox"]}>
        <div
          className={styles["sign-in-title"]}
          style={{ margin: "60px 0px 0px 0px" }}
        >
          {/* <img
            className="mx-3"
            src={process.env.PUBLIC_URL + '/img/ecrarm-logo.png'}
            width="70" height="70"
            alt="ecrarm-logo" /> */}
          <img src={process.env.PUBLIC_URL + '/img/ecrarm-title3.png'}
            className="m-3"
            width="250" height="50"
            alt="ecrarm-title" />
        </div>

        <Input
          title="아이디"
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <Input
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
        >
          <ValidMsg check={isValid}>
            아이디 혹은 비밀번호를 확인해주세요.
          </ValidMsg>
        </Input>
        <Link
          to="/"
          style={{ textDecorationLine: "none", color: "black" }}
        >
          <Btn style={{ marginTop: "24px" }}>로그인</Btn>
        </Link>


        <div className={styles["rq-msg"]}>
          아직 계정이 없으세요?
          <Link to="/SignUp">
            <span style={{ color: "#4981F2" }}>회원가입</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
