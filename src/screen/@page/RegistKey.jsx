import "../login/Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import applyimg from "../login/applyimg.png";
import { StyledButton, StyledInput } from "../login/styled";
import { registKey } from "../login/userAPI";

export default function RegistKey() {
  const navigate = useNavigate();
  const [accessKey, setAccessKey] = useState("");
  const [secret, setSecret] = useState("");

  const onEmailHandler = (event) => {
    setAccessKey(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setSecret(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    registKey(
      {
        accessKey,
        secret,
      },
      linkToKeyPage,
    );
  };

  const linkToKeyPage = () => {
    navigate("/cause");
  };

  return (
    <>
      <div>
        <div className="out">
          <h1>AWS KEY 등록</h1>
          <br />
          <br />
          <br />
          <form onSubmit={submitHandler}>
            <label htmlFor="accessKey">accessKey</label>
            <br />
            <br />
            <StyledInput id="accessKey" type="text" value={accessKey} onChange={onEmailHandler}></StyledInput>
            <br />
            <br />
            <label htmlFor="secret">secret</label>
            <br />
            <br />
            <StyledInput id="secret" type="password" value={secret} onChange={onPasswordHandler}></StyledInput>
            <br />
            <br />
            <br />
            <StyledButton type="submit">
              <img alt="apply" src={applyimg} width="20px" height="20px"></img>
              &nbsp;확인
            </StyledButton>
            <br />
          </form>
          <br />
        </div>
      </div>
    </>
  );
}
