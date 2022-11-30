import { Suspense } from "react";
import styled from "styled-components";

import useDblClick from "../../service/hooks/instanceContext/useDblClick";
import { instanceIconType, InstanceIconTypeWithNull } from "../../store/types/instanceIcon.d";
import Loader from "../common/Loader";
import CheckBtn from "./info/CheckBtn";
import DeleteBtn from "./info/DeleteBtn";
import InstanceInfo from "./info/instanceInfo";
import LoadBalancerInfo from "./info/loadBalancerInfo";
import RDSInfo from "./info/rdsInfo";

export default function InfoSection() {
  const { instanceId, instanceType } = useDblClick();

  const InfoComponentByType = (_instanceType: InstanceIconTypeWithNull) => {
    switch (_instanceType) {
      case instanceIconType.Ubuntu:
      case instanceIconType.Centos:
        return <InstanceInfo id={instanceId} />;
      case instanceIconType.ALB:
        return <LoadBalancerInfo id={instanceId} />;
      case instanceIconType.RDS:
        return <RDSInfo id={instanceId} />;
      default:
        return null;
    }
  };

  return (
    <StInfoSection>
      <Suspense fallback={<Loader />}>{InfoComponentByType(instanceType)}</Suspense>
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
