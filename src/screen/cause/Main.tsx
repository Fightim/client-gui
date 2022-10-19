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
        <St.VPCBoxTitle>Default VPC</St.VPCBoxTitle>
        <St.VPCBoxBody>
          <article></article>
          <article></article>
          <article></article>
        </St.VPCBoxBody>
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

const StVPCSection = styled.section`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.blue040};
`;

const StInfoSection = styled.section`
  width: 31.7rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
