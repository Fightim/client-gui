import { Link } from "react-router-dom";
import styled from "styled-components";

import { IcApply } from "../../store/assets";

export default function Header() {
  return (
    <StHeaderContainer>
      <StLogo>svg</StLogo>
      <StLinksContainer>
        <Link to="">AWS 연동</Link>
        <Link to="">아키텍쳐 설계</Link>
      </StLinksContainer>
      <StCompleteButton>
        <IcApply />
        완료 버튼
      </StCompleteButton>
    </StHeaderContainer>
  );
}

const StHeaderContainer = styled.header`
  height: 5.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 4px 4px 4px rgba(78, 78, 78, 0.25);
`;

const StLogo = styled.div`
  margin: 0 -2rem 0 2rem;
`;

const StLinksContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  & > a:not(:last-child) {
    margin-right: 8rem;
  }
`;

const StCompleteButton = styled.button`
  width: 182px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 8.7rem 0 -8.7rem;

  background: ${({ theme }) => theme.colors.blue200};
  border-radius: 6px;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};

  & > svg {
    margin-right: 1rem;
  }
`;
