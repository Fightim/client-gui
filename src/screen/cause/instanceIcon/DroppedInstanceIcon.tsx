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
`;

const StIcMySQL = styled(IcMySQL)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const droppedInstanceIcons = [
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

const StIconWrapper = styled.strong<{ active: boolean; type: InstanceIconType }>`
  display: inline-flex;
  align-items: center;

  color: ${({ theme: { colors }, active, type }) =>
    active ? (type <= 1 ? colors.orange100 : colors.purple100) : colors.black100};
  font-weight: ${({ active }) => (active ? 600 : 200)};
  font-size: 1.6rem;

  cursor: pointer;
`;
const StIconWrapperForALB = styled.strong`
  position: absolute;
  right: 2.6rem;
  bottom: 2rem;

  cursor: pointer;
`;
