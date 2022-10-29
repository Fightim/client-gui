import styled from "styled-components";

import Style from "./@styled/instanceBox";
import PrivateSubnetInstance from "./vpc/PrivateSubnetInstance";
import PrivateSubnetRDS from "./vpc/PrivateSubnetRDS";
import PublicSubnet from "./vpc/PublicSubnet";

export default function VPCSection() {
  return (
    <StVPCSection>
      <StVPCContainerTitle>Default VPC</StVPCContainerTitle>
      <StVPCContainerBody>
        <PublicSubnet />
        <PrivateSubnetInstance />
        <PrivateSubnetRDS />
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
