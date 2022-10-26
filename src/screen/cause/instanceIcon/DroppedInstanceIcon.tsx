import styled from "styled-components";

import { droppedInstanceIcons } from "../../../store/instanceIcon/dropped";
import { InstanceIconType } from "../../../store/types/instanceIcon";

interface DroppedInstanceIconProps {
  type: InstanceIconType;
}

export default function DroppedInstanceIcon(props: DroppedInstanceIconProps) {
  const { type } = props;

  const isActive = true;
  // TODO :: 더블클릭 -> 정보창의 data context 에 업데이트
  // TODO :: active는! 이 컴포넌트의 id와 context data의 id가 같은지 비교

  if (type === 2) return <StIconWrapperForALB>{droppedInstanceIcons[type].element}</StIconWrapperForALB>;

  return (
    <StIconWrapper active={isActive} type={type}>
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
    active ? (type <= 1 ? colors.orange100 : colors.purple100) : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
