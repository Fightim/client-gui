import styled from "styled-components";

import { IcArrowBlue } from "../../../../store/assets";
import { OptionTitle } from "../../@styled/info.styled";

// TODO :: any 삭제
export default function InstanceInformations(props: any) {
  const { id, os, privateIp, publicIp, securityGroup, type } = props;

  return (
    <>
      <StSubject>인스턴스 정보</StSubject>

      <StTitle>도메인 이름</StTitle>
      <ContentWrapper>{id}</ContentWrapper>

      <StTitle>보안 그룹</StTitle>
      {securityGroup.map((security: string, idx: number) => (
        <ContentWrapper key={idx}>{security}</ContentWrapper>
      ))}

      <StTitle>대상 그룹 인스턴스</StTitle>
      <ContentWrapper>
        {type} - {os}
      </ContentWrapper>

      <StTitle>IP</StTitle>
      <ContentWrapper>PUBLIC - {publicIp}</ContentWrapper>
      <ContentWrapper>PRIVATE - {privateIp}</ContentWrapper>
    </>
  );
}

const StSubject = styled(OptionTitle)`
  margin: 3.2rem 0 2rem;
`;

const StTitle = styled.div`
  width: 100%;
  height: 2.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.8rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gary100};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gary100};

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
`;

function ContentWrapper(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <StContentWrapper>
      <StIcArrowBlue />
      <StContent>{children}</StContent>
    </StContentWrapper>
  );
}

const StContentWrapper = styled.div`
  position: relative;

  padding-left: 0.9rem;
  margin-bottom: 0.9rem;

  align-self: start;
`;

const StIcArrowBlue = styled(IcArrowBlue)`
  position: absolute;
  top: 0.6rem;
  left: 0;
`;

const StContent = styled.strong`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.1rem;
`;
