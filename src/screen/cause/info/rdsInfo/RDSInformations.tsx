import St from "../../@styled/infoInformations.styled";
import ContentWrapper from "../ContentWrapper";

// TODO :: any 삭제
// REF :: props id 값 제외, 전부 nullable
export default function RDSInformations(props: any) {
  const { id, DBInstanceStatus, endPoint, port, storage } = props;

  return (
    <>
      <St.Subject>인스턴스 정보</St.Subject>

      {id && (
        <>
          <St.Title>ID</St.Title>
          <ContentWrapper>{id}</ContentWrapper>
        </>
      )}

      {DBInstanceStatus && (
        <>
          <St.Title>현재 상태</St.Title>
          <ContentWrapper>{DBInstanceStatus}</ContentWrapper>
        </>
      )}

      {endPoint && (
        <>
          <St.Title>엔드포인트</St.Title>
          <ContentWrapper>{endPoint}</ContentWrapper>
        </>
      )}

      {port && (
        <>
          <St.Title>포트 번호</St.Title>
          <ContentWrapper>{port}</ContentWrapper>
        </>
      )}

      {storage && (
        <>
          <St.Title>스토리지</St.Title>
          <ContentWrapper>{storage}</ContentWrapper>
        </>
      )}
    </>
  );
}
