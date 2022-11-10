import styled from "styled-components";

import useDblClick from "../../service/hooks/instanceContext/useDblClick";
import InstanceInfo from "./info/InstanceInfo";

// TODO ::
// 1. react-query 틀잡기
// 2. responseDto 옵셔널 타이핑
// 3. 각 옵셔널에 맞는 UI 제작
// +. type(, id)을 가지고 컴포넌트 조작

export default function InfoSection() {
  const { instanceId } = useDblClick();

  return (
    <StInfoSection>
      <InstanceInfo id={instanceId} />
      {/* <LoadBalancerInfo />
      <RDSInfo /> */}
    </StInfoSection>
  );
}

const StInfoSection = styled.section`
  width: 31.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.9rem 1.6rem 1rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
