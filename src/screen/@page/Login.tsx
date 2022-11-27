import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUser, postLoginUser } from "../../story/api/user";
import { IcApply } from "../../store/assets";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginState, setIsLoginState] = useState(true);

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postFunction = isLoginState ? postLoginUser : createUser;
    postFunction(
      {
        email,
        password,
      },
      linkToKeyPage,
    );
  };

  const linkToKeyPage = () => {
    navigate("/key");
  };

  return (
    <StRoot>
      <h1>{isLoginState ? "로그인" : "회원가입"}</h1>
      <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <br />
        <br />
        <StInput id="email" type="text" value={email} onChange={onEmailHandler}></StInput>
        <br />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <br />
        <StInput id="password" type="password" value={password} onChange={onPasswordHandler}></StInput>
        <br />
        <br />
        <br />
        <StButton type="submit">
          <IcApply />
          &nbsp;확인
        </StButton>
        <br />
      </form>
      <br />
      <StSignup onClick={() => setIsLoginState((prev) => !prev)}>{isLoginState ? "회원가입" : "로그인"}</StSignup>
    </StRoot>
  );
}

const StRoot = styled.main`
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-style: inherit;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 150px 0;
`;

const StInput = styled.input`
  height: 50px;
  width: 350px;
  border-radius: 6px;
  font-size: 14px;
  background-color: #f6f6fa;
  border: solid #dfdfdf;
  padding-left: 20px;
`;

const StButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #ff9a3e;
  border-color: #ff9a3e;
  color: #ffffff;
  border-radius: 5px;
  font-size: 20px;
  color: white;
`;

const StSignup = styled.button`
  font-size: 14px;
`;
