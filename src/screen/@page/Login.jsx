import "../login/Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import applyimg from "../login/applyimg.png";
import { postLoginUser } from "../login/loginUser";

const StyledInput = styled.input`
  height: 50px;
  width: 350px;
  border-radius: 6px;
  font-size: 14px;
  background-color: #f6f6fa;
  border: solid #dfdfdf;
  padding-left: 20px;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #ff9a3e;
  border-color: #ff9a3e;
  color: #ffffff;
  border-radius: 5px;
  font-size: 20px;
  color: white;
`;

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await postLoginUser(
      {
        email,
        password,
        passwordCheck: password,
      },
      linkToKeyPage,
    );
  };

  const linkToKeyPage = () => {
    navigate("/key");
  };

  return (
    <>
      <div>
        <div className="out">
          <h1>로그인</h1>
          <br />
          <br />
          <br />
          <form onSubmit={submitHandler}>
            <label htmlFor="email">email</label>
            <br />
            <br />
            <StyledInput id="email" type="text" value={email} onChange={onEmailHandler}></StyledInput>
            <br />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <br />
            <StyledInput id="password" type="password" value={password} onChange={onPasswordHandler}></StyledInput>
            <br />
            <br />
            <br />
            <StyledButton type="submit">
              <img alt="apply" src={applyimg} width="20px" height="20px"></img>
              &nbsp;확인
            </StyledButton>
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
