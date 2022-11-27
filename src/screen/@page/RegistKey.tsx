import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registKey } from "../../story/api/user";
import { IcApply } from "../../store/assets";
import styled from "styled-components";

export default function RegistKey() {
  const navigate = useNavigate();
  const [accessKey, setAccessKey] = useState("");
  const [secret, setSecret] = useState("");

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKey(event.target.value);
  };

  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecret(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
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
    <StRoot className="out">
      <h1>AWS KEY 등록</h1>
      <br />
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="accessKey">accessKey</label>
        <br />
        <br />
        <StInput id="accessKey" type="text" value={accessKey} onChange={onEmailHandler}></StInput>
        <br />
        <br />
        <label htmlFor="secret">secret</label>
        <br />
        <br />
        <StInput id="secret" type="password" value={secret} onChange={onPasswordHandler}></StInput>
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
