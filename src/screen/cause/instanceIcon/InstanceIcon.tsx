import styled from "styled-components";

import { IcALB, IcMySQL, IcT2 } from "../../../store/assets";
import { InstanceIconType } from "../../../store/types/instanceIcon";

const StIcT2 = styled(IcT2)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const StIcALB = styled(IcALB)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const StIcMySQL = styled(IcMySQL)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const instanceIcons = [
  {
    element: <StIcT2 />,
    name: "t2.micro.ubuntu",
  },
  {
    element: <StIcT2 />,
    name: "t2.micro.centos",
  },
  {
    element: <StIcALB />,
    name: "ALB",
  },
  {
    element: <StIcMySQL />,
    name: "MySQL",
  },
];

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
    active ? (type <= 1 ? colors.orange100 : colors.purple100) : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
