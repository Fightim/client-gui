import styled from "styled-components";

import { instanceIconType } from "../../store/types/instanceIcon.d";
import St from "./@styled/instanceBox";
import DroppedInstanceIcon from "./instanceIcon/DroppedInstanceIcon";

export default function VPCSection() {
  function X(e: React.DragEvent<HTMLElement>) {
    console.log(e);
  }

  return (
    <StVPCSection>
      <StVPCContainerTitle>Default VPC</StVPCContainerTitle>
      <StVPCContainerBody>
        {/* TODO :: 한 컴포넌트로 조작 */}
        {/* TODO :: onDragOver와 border 조작 함께 */}
        {/* TODO :: onDrop :: 해당 인스턴스를 context 데이터에 추가*/}
        {/* TODO :: onDrop :: 해당 인스턴스를 UI에 추가 */}
        <StVPCBox onDragOver={(e) => e.preventDefault()} onDrop={X}>
          <StVPCBoxTitle>Public Subnet</StVPCBoxTitle>
          <StVPCBoxBody>
            <DroppedInstanceIcon type={instanceIconType.Ubuntu} />
            <DroppedInstanceIcon type={instanceIconType.Centos} />
            <DroppedInstanceIcon type={instanceIconType.ALB} />
          </StVPCBoxBody>
        </StVPCBox>
        <StVPCBox>
          <StVPCBoxTitle>Private Subnet</StVPCBoxTitle>
          <StVPCBoxBody>
            <DroppedInstanceIcon type={instanceIconType.Ubuntu} />
            <DroppedInstanceIcon type={instanceIconType.Centos} />
          </StVPCBoxBody>
        </StVPCBox>
        <StVPCBox>
          <StVPCBoxTitle>Private Subnet</StVPCBoxTitle>
          <StVPCBoxBody>
            <DroppedInstanceIcon type={instanceIconType.MySQL} />
            <DroppedInstanceIcon type={instanceIconType.MySQL} />
          </StVPCBoxBody>
        </StVPCBox>
      </StVPCContainerBody>
    </StVPCSection>
  );
}

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
  position: relative;

  height: calc(100% - 3rem);

  padding: 2rem 2.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
