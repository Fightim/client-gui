import styled from "styled-components";

import St from "./styled/instanceBox";

export default function Main() {
  return (
    <MainContainer>
      <InstanceSection>
        {/* TODO :: 한 컴포넌트로 조작 */}
        <St.InstanceBox>
          <St.Title>EC2 인스턴스</St.Title>
        </St.InstanceBox>
        <St.InstanceBox>
          <St.Title>로드 밸런서</St.Title>
        </St.InstanceBox>
        <St.InstanceBox>
          <St.Title>RDS</St.Title>
        </St.InstanceBox>
      </InstanceSection>
      <VPCSection>
        <St.VPCTitle>Default VPC</St.VPCTitle>
      </VPCSection>
      <InfoSection>right</InfoSection>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  height: calc(100vh - 5.8rem);

  display: flex;
  gap: 2rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.blue050};

  & > section {
    height: 100%;
  }
`;

const InstanceSection = styled.section`
  width: 31.7rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > article {
    flex: 1;
  }
`;

const VPCSection = styled.section`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.blue040};
`;

const InfoSection = styled.section`
  width: 31.7rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
