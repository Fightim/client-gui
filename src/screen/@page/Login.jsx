/*
마지막 편집자: 22-11-16 joohaem
변경사항 및 참고:
  - 여기서 진행하면 돼 !!!!
  - 컴포넌트 분리는 src/screen/login 폴더에 모아주면 돼
  - 브랜치 파고, 작업하는 거 잊지 말기!
    
고민점:
  - 
*/

import styled from "styled-components";
import "../login/Login.css";
import applyimg from "../login/applyimg.png";
import React,{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {loginUser} from "../login/loginUser.js";

const StyledInput=styled.input`
height: 50px;
width: 350px;
border-radius: 6px;
font-size: 14px;
background-color:#F6F6FA;
border:solid #DFDFDF;
padding-left:20px;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #FF9A3E;
  border-color: #FF9A3E;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:20px;
  color:white;
`;


export default function Login() {

  const dispatch=useDispatch();
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const onEmailHandler=(event)=>{
    setEmail(event.target.value);
  }
  
  const onPasswordHandler=(event)=>{
    setPassword(event.target.value);
  }
  
  
  const submitHandler=(event)=>{
    event.preventDefault(); //reload막기
    console.log('email',email);
    console.log('password',password);

    let body={
      email:email,
      password:password,
    }
      dispatch(loginUser(body));    
    }
  

  return (
    <>
  <div>

    <div className="out">
      <form onSubmit={submitHandler}>
    <a>email</a>
    <br/>
    <br/>
    <StyledInput 
    type="text" 
    value={email} 
    onChange={onEmailHandler}
    ></StyledInput>
    <br/>
    <br/>
    <a>password</a>
    <br/>
    <br/>
    <StyledInput
    type="password"
    value={password}
    onChange={onPasswordHandler}
    ></StyledInput>
    <br/>
    <br/>
    <br/>
    <StyledButton
    type="submit"
    >
      <img
          alt="apply"
          src={applyimg}
          width="20px"
          height="20px"></img>
    &nbsp;확인</StyledButton>
    <br/>
    
  </form>
    </div>
    </div>
    </>
    );
};
