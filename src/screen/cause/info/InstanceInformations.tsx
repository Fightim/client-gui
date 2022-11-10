import styled from "styled-components";

import { OptionTitle } from "../@styled/info.styled";

export default function InstanceInformations(props: any) {
  const { id, os, privateIp, publicIp, securityGroup, storageType, storageVolume, tier, type } = props;

  return (
    <>
      <StSubject>인스턴스 정보</StSubject>
    </>
  );
}
const StSubject = styled(OptionTitle)`
  margin: 3.2rem 0 2rem;
`;
