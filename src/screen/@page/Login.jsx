import "../login/Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import applyimg from "../login/applyimg.png";
import { StyledButton, StyledInput } from "../login/styled";
import { createUser, postLoginUser } from "../login/userAPI";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginState, setIsLoginState] = useState(true);

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const postFunction = isLoginState ? postLoginUser : createUser;
    await postFunction(
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
    <>
      <div>
        <div className="out">
          <h1>{isLoginState ? "로그인" : "회원가입"}</h1>
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
          <br />
          <button className="signup" onClick={() => setIsLoginState((prev) => !prev)}>
            {isLoginState ? "회원가입" : "로그인"}
          </button>
        </div>
      </div>
    </>
  );
}
