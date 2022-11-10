import styled from "styled-components";

import useDblClick from "../../service/hooks/instanceContext/useDblClick";
import CheckBtn from "./info/CheckBtn";
import DeleteBtn from "./info/DeleteBtn";
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
      <StBtnWrapper>
        <DeleteBtn />
        <CheckBtn />
      </StBtnWrapper>
    </StInfoSection>
  );
}

const StInfoSection = styled.section`
  position: relative;

  width: 31.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.9rem 1.6rem 1rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;

const StBtnWrapper = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 1rem;
  left: 0rem;

  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 1.5rem;
`;
