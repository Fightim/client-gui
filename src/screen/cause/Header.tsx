import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImgLogo } from "../../store/assets";
import CompleteButton from "./header/CompleteButton";

export default function Header() {
  return (
    <StHeaderContainer>
      <StLogo src={ImgLogo} alt="logo" />
      <StLinksContainer>
        <Link to="/key">AWS 연동</Link>
        <Link to="/cause">아키텍쳐 설계</Link>
      </StLinksContainer>
      <CompleteButton />
    </StHeaderContainer>
  );
}

const StHeaderContainer = styled.header`
  height: 5.8rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 4px 4px 4px rgba(78, 78, 78, 0.25);
`;

const StLogo = styled.img`
  position: absolute;
  left: 2rem;

  width: 14.8rem;
  height: 3.6rem;
`;

const StLinksContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  & > a:not(:last-child) {
    margin-right: 8rem;
  }
`;
