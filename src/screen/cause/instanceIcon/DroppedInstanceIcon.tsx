import styled from "styled-components";

import useDblClick from "../../../service/hooks/instanceContext/useDblClick";
import { checkIsCurrentInstance } from "../../../service/util/removeIdsBeforePost.ts";
import { droppedInstanceIcons } from "../../../store/instanceIcon/dropped";
import { InstanceIconType, instanceIconType } from "../../../store/types/instanceIcon.d";

interface DroppedInstanceIconProps {
  type: InstanceIconType;
  instanceId: string;
}

export default function DroppedInstanceIcon(props: DroppedInstanceIconProps) {
  const { type, instanceId } = props;

  const { handleInstanceId, handleInstanceType } = useDblClick();

  const isActive = true;
  // TODO :: active는! 이 컴포넌트의 id와 context data의 id가 같은지 비교

  function handleDoubleClick(type: InstanceIconType, instanceId: string) {
    if (checkIsCurrentInstance(instanceId)) return;

    handleInstanceType(type);
    handleInstanceId(instanceId);
  }

  if (type === instanceIconType.ALB)
    return (
      <StIconWrapperForALB onDoubleClick={() => handleDoubleClick(type, instanceId)}>
        {droppedInstanceIcons[type].element}
      </StIconWrapperForALB>
    );

  return (
    <StIconWrapper onDoubleClick={() => handleDoubleClick(type, instanceId)} active={isActive} type={type}>
      {droppedInstanceIcons[type].element}
      {droppedInstanceIcons[type].name}
    </StIconWrapper>
  );
}

const StIconWrapperForALB = styled.strong`
  position: absolute;
  right: 2.6rem;
  bottom: 2rem;

  cursor: pointer;
`;

const StIconWrapper = styled.strong<{ active: boolean; type: InstanceIconType }>`
  display: inline-flex;
  align-items: center;

  color: ${({ theme: { colors }, active, type }) =>
    active
      ? type === instanceIconType.Ubuntu || type === instanceIconType.Centos
        ? colors.orange100
        : colors.purple100
      : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
