import St from "../../@styled/infoInformations.styled";
import ContentWrapper from "../ContentWrapper";

// TODO :: any 삭제
export default function RDSInformations(props: any) {
  const { endPoint, port, storage } = props;

  return (
    <>
      <St.Subject>인스턴스 정보</St.Subject>

      <St.Title>엔드포인트</St.Title>
      <ContentWrapper>{endPoint}</ContentWrapper>

      <St.Title>포트 번호</St.Title>
      <ContentWrapper>{port}</ContentWrapper>

      <St.Title>스토리지</St.Title>
      <ContentWrapper>{storage}</ContentWrapper>
    </>
  );
}
