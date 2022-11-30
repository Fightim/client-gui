import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTER_PATH } from "../../Router";
import { ImgLogo } from "../../store/assets";
import CompleteButton from "./header/CompleteButton";

const LOCAL_STORAGE_KEY = "user-token";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    navigate(ROUTER_PATH.login);
  };

  return (
    <StHeaderContainer>
      <StLogo src={ImgLogo} alt="logo" />
      <StLinksContainer>
        <StLogoutBtn onClick={handleLogout}>로그아웃</StLogoutBtn>
        <Link to={ROUTER_PATH.registerKey}>AWS 연동</Link>
        <Link to={ROUTER_PATH.cause}>아키텍쳐 설계</Link>
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

const StLogoutBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
`;

const StLinksContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  & > *:not(:last-child) {
    margin-right: 8rem;
  }
`;
