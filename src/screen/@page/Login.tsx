/*
마지막 편집자: 22-11-16 joohaem
변경사항 및 참고:
  - 여기서 진행하면 돼 !!!!
  - 컴포넌트 분리는 src/screen/login 폴더에 모아주면 돼
  - 브랜치 파고, 작업하는 거 잊지 말기!
    
고민점:
  - 
*/

import React from "react";
import styled from "styled-components";
import "../login/Login.css";
import applyimg from "../login/applyimg.png";

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
  return (
  <div>

    <div className="out">
    <a>email</a>
    <br/>
    <br/>
    <StyledInput></StyledInput>
    <br/>
    <br/>
    <a>password</a>
    <br/>
    <br/>
    <StyledInput
    ></StyledInput>
    <br/>
    <br/>
    <br/>
    <StyledButton><img
                alt="apply"
                src={applyimg}
                width="20px"
                height="20px"></img>&nbsp;확인</StyledButton>
    </div>
    </div>
    );
};
