import styled from "styled-components";

import { instanceIcons } from "../../../store/instanceIcon/draggable";
import { InstanceIconType } from "../../../store/types/instanceIcon";

interface InstanceIconProps {
  type: InstanceIconType;
  active: boolean;
}

export default function InstanceIcon(props: InstanceIconProps) {
  const { type, active } = props;

  console.log(type);

  return (
    <StIconWrapper active={active} type={type}>
      {instanceIcons[type].element}
      {instanceIcons[type].name}
    </StIconWrapper>
  );
}

const StIconWrapper = styled.div<{ active: boolean; type: InstanceIconType }>`
  display: inline-flex;
  align-items: center;

  color: ${({ theme: { colors }, active, type }) =>
    active ? (type <= 1 ? colors.orange100 : colors.purple100) : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
