import styled from "styled-components";

import useALB from "../../service/hooks/instanceContext/useALB";
import usePublicCentos from "../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../service/hooks/instanceContext/usePublicUbuntu";
import useDrag from "../../service/hooks/useDrag";
import { instanceIconType } from "../../store/types/instanceIcon.d";
import Style from "./@styled/instanceBox";
import St from "./@styled/vpc";
import DroppedInstanceIcon from "./instanceIcon/DroppedInstanceIcon";
import PrivateSubnetInstance from "./vpc/PrivateSubnetInstance";
import PublicSubnet from "./vpc/PublicSubnet";

export default function VPCSection() {
  return (
    <StVPCSection>
      <StVPCContainerTitle>Default VPC</StVPCContainerTitle>
      <StVPCContainerBody>
        <PublicSubnet />
        <PrivateSubnetInstance />
        <St.VPCBox>
          <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
          <St.VPCBoxBody>
            <DroppedInstanceIcon type={instanceIconType.MySQL} />
            <DroppedInstanceIcon type={instanceIconType.MySQL} />
          </St.VPCBoxBody>
        </St.VPCBox>
      </StVPCContainerBody>
    </StVPCSection>
  );
}

const StVPCSection = styled(Style.InstanceBox)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.blue040};
`;

const StVPCContainerTitle = styled(Style.BoxTitle)`
  background-color: ${({ theme }) => theme.colors.blue100};
`;

const StVPCContainerBody = styled(Style.BoxBody)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.blue040};

  padding: 1rem 1.2rem;

  & > article {
    flex: 1;
  }
`;
