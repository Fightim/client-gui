import styled from "styled-components";

import { instanceIconType } from "../../store/types/instanceIcon.d";
import St from "./@styled/instanceBox.styled";
import DraggableInstanceIcon from "./instanceIcon/DraggableInstanceIcon";

export default function InstanceSection() {
  return (
    <StInstanceSection>
      <St.InstanceBox>
        <St.BoxTitle>EC2 인스턴스</St.BoxTitle>
        <St.BoxBody>
          <DraggableInstanceIcon type={instanceIconType.Ubuntu} />
          <DraggableInstanceIcon type={instanceIconType.Centos} />
        </St.BoxBody>
      </St.InstanceBox>
      <St.InstanceBox>
        <St.BoxTitle>로드 밸런서</St.BoxTitle>
        <St.BoxBody>
          <DraggableInstanceIcon type={instanceIconType.ALB} />
        </St.BoxBody>
      </St.InstanceBox>
      <St.InstanceBox>
        <St.BoxTitle>RDS</St.BoxTitle>
        <St.BoxBody>
          <DraggableInstanceIcon type={instanceIconType.RDS} />
        </St.BoxBody>
      </St.InstanceBox>
    </StInstanceSection>
  );
}

const StInstanceSection = styled.section`
  width: 31.7rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > article {
    flex: 1;
  }
`;
