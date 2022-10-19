import styled from "styled-components";

import St from "./styled/instanceBox";

export default function Main() {
  return (
    <StMainContainer>
      <StInstanceSection>
        {/* TODO :: 한 컴포넌트로 조작 */}
        <St.InstanceBox>
          <St.BoxTitle>EC2 인스턴스</St.BoxTitle>
          <St.BoxBody>a</St.BoxBody>
        </St.InstanceBox>
        <St.InstanceBox>
          <St.BoxTitle>로드 밸런서</St.BoxTitle>
          <St.BoxBody>a</St.BoxBody>
        </St.InstanceBox>
        <St.InstanceBox>
          <St.BoxTitle>RDS</St.BoxTitle>
          <St.BoxBody>a</St.BoxBody>
        </St.InstanceBox>
      </StInstanceSection>
      <StVPCSection>
        <StVPCContainerTitle>Default VPC</StVPCContainerTitle>
        <StVPCContainerBody>
          {/* TODO :: 한 컴포넌트로 조작 */}
          <StVPCBox>
            <StVPCBoxTitle>Public Subnet</StVPCBoxTitle>
            <StVPCBoxBody>s</StVPCBoxBody>
          </StVPCBox>
          <StVPCBox>
            <StVPCBoxTitle>Private Subnet</StVPCBoxTitle>
            <StVPCBoxBody>s</StVPCBoxBody>
          </StVPCBox>
          <StVPCBox>
            <StVPCBoxTitle>Private Subnet</StVPCBoxTitle>
            <StVPCBoxBody>s</StVPCBoxBody>
          </StVPCBox>
        </StVPCContainerBody>
      </StVPCSection>
      <StInfoSection>right</StInfoSection>
    </StMainContainer>
  );
}

const StMainContainer = styled.main`
  height: calc(100vh - 5.8rem);

  display: flex;
  gap: 2rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.blue050};

  & > section {
    height: 100%;
  }
`;

const StInstanceSection = styled.section`
  width: 31.7rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > article {
    flex: 1;
  }
`;

const StVPCSection = styled(St.InstanceBox)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.blue040};
`;

const StVPCContainerTitle = styled(St.BoxTitle)`
  background-color: ${({ theme }) => theme.colors.blue100};
`;

const StVPCContainerBody = styled(St.BoxBody)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.blue040};

  padding: 1rem 1.2rem;

  & > article {
    flex: 1;
  }
`;

const StVPCBox = styled.article`
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.18);
  border-radius: 0.8rem;
`;

const StVPCBoxTitle = styled(St.BoxTitle)`
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.blue030};

  font-weight: 400;
  color: ${({ theme }) => theme.colors.black100};
`;

const StVPCBoxBody = styled(St.BoxBody)`
  height: calc(100% - 3rem);

  padding: 2rem 2.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;

const StInfoSection = styled.section`
  width: 31.7rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
