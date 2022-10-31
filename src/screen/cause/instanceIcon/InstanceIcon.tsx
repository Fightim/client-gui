import styled from "styled-components";

import { instanceIcons } from "../../../store/instanceIcon/draggable";
import { InstanceIconType, instanceIconType } from "../../../store/types/instanceIcon.d";

interface InstanceIconProps {
  type: InstanceIconType;
  active: boolean;
}

export default function InstanceIcon(props: InstanceIconProps) {
  const { type, active } = props;

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
    active
      ? type === instanceIconType.Ubuntu || type === instanceIconType.Centos
        ? colors.orange100
        : colors.purple100
      : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
