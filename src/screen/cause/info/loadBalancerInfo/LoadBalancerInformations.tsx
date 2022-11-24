import St from "../../@styled/infoInformations.styled";
import ContentWrapper from "../ContentWrapper";

// TODO :: any 삭제
export default function LoadBalancerInformations(props: any) {
  const { domain, securityGroup, targetGroupInstances } = props;

  return (
    <>
      <St.Subject>인스턴스 정보</St.Subject>

      <St.Title>도메인 이름</St.Title>
      <ContentWrapper>{domain}</ContentWrapper>

      <St.Title>보안 그룹</St.Title>
      {securityGroup.map((security: string) => (
        <ContentWrapper key={security}>{security}</ContentWrapper>
      ))}

      <St.Title>타겟 인스턴스 그룹</St.Title>
      {targetGroupInstances.map((target: string) => (
        <ContentWrapper key={target}>{target}</ContentWrapper>
      ))}
    </>
  );
}
