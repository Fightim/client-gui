import { Suspense } from "react";
import styled from "styled-components";

import useDblClick from "../../service/hooks/instanceContext/useDblClick";
import { instanceIconType, InstanceIconTypeWithNull } from "../../store/types/instanceIcon.d";
import Loader from "../common/Loader";
import CheckBtn from "./info/CheckBtn";
import DeleteBtn from "./info/DeleteBtn";
import InstanceInfo from "./info/instanceInfo";
import LoadBalancerInfo from "./info/loadBalancerInfo";

// TODO ::
// 1. react-query 틀잡기
// 2. responseDto 옵셔널 타이핑
// 3. 각 옵셔널에 맞는 UI 제작
// +. type(, id)을 가지고 컴포넌트 조작

export default function InfoSection() {
  const { instanceId, instanceType } = useDblClick();

  const infoComponentByType = (_instanceType: InstanceIconTypeWithNull) => {
    switch (_instanceType) {
      case instanceIconType.Ubuntu:
      case instanceIconType.Centos:
        return <InstanceInfo id={instanceId} />;
      case instanceIconType.ALB:
        return <LoadBalancerInfo />;
      case instanceIconType.MySQL:
        return <div>MYMYMYM</div>;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <StInfoSection>
        <>
          {infoComponentByType(instanceType)}
          <StBtnWrapper>
            <DeleteBtn />
            <CheckBtn />
          </StBtnWrapper>
        </>
      </StInfoSection>
    </Suspense>
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
