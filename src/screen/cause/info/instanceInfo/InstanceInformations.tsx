import St from "../../@styled/infoInformations.styled";
import ContentWrapper from "../ContentWrapper";
import { InstanceInformations as InstanceInformationsType } from "../../../../store/types/responseDto.d";

type InstanceInformationsProps = Omit<InstanceInformationsType, "tier">;

export default function InstanceInformations(props: InstanceInformationsProps) {
  const { id, os, privateIp, publicIp, securityGroup, type } = props;

  return (
    <>
      <St.Subject>인스턴스 정보</St.Subject>

      <St.Title>ID</St.Title>
      <ContentWrapper>{id}</ContentWrapper>

      <St.Title>보안 그룹</St.Title>
      {securityGroup.map((security: string) => (
        <ContentWrapper key={security}>{security}</ContentWrapper>
      ))}

      <St.Title>대상 그룹 인스턴스</St.Title>
      <ContentWrapper>
        {type} - {os}
      </ContentWrapper>

      <St.Title>IP</St.Title>
      <ContentWrapper>PUBLIC - {publicIp}</ContentWrapper>
      <ContentWrapper>PRIVATE - {privateIp}</ContentWrapper>
    </>
  );
}
