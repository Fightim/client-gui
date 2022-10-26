import styled from "styled-components";

import { IcALB, IcMySQL, IcT2 } from "../../store/assets";

const StIconWrapper = styled.strong<{ active: boolean; type: 0 | 1 | 2 }>`
  display: flex;
  align-items: center;

  color: ${({ theme: { colors }, active, type }) =>
    active ? (type === 0 ? colors.orange100 : colors.purple100) : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;
`;

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
    element: <StIcALB />,
    name: "ALB",
  },
  {
    element: <StIcMySQL />,
    name: "MySQL",
  },
];

interface InstanceIconProps {
  type: 0 | 1 | 2;
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
