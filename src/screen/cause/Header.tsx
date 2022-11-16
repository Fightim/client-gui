import { Link } from "react-router-dom";
import styled from "styled-components";

import usePrivateCentos from "../../service/hooks/instanceContext/usePrivateCentos";
import usePrivateUbuntu from "../../service/hooks/instanceContext/usePrivateUbuntu";
import usePublicCentos from "../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../service/hooks/instanceContext/usePublicUbuntu";
import { removeIdsBeforePost } from "../../service/util/removeIdsBeforePost.ts";
import { IcApply } from "../../store/assets";

export default function Header() {
  const { privateUbuntuInstances } = usePrivateUbuntu();
  const { publicUbuntuInstances } = usePublicUbuntu();
  const { privateCentosInstances } = usePrivateCentos();
  const { publicCentosInstances } = usePublicCentos();

  function handleClickComplete() {
    // TODO :: 로딩뷰

    // reduce 로 id 값 제거
    const droppedInstances = [
      ...privateUbuntuInstances,
      ...publicUbuntuInstances,
      ...privateCentosInstances,
      ...publicCentosInstances,
    ];
    const postingInstances = removeIdsBeforePost(droppedInstances);
  }

  return (
    <StHeaderContainer>
      <StLogo>svg</StLogo>
      <StLinksContainer>
        <Link to="">AWS 연동</Link>
        <Link to="">아키텍쳐 설계</Link>
      </StLinksContainer>
      <StCompleteButton onClick={handleClickComplete}>
        <IcApply />
        완료 버튼
      </StCompleteButton>
    </StHeaderContainer>
  );
}

const StHeaderContainer = styled.header`
  height: 5.8rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 4px 4px 4px rgba(78, 78, 78, 0.25);
`;

const StLogo = styled.div`
  position: absolute;
  left: 2rem;
`;

const StLinksContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 500;

  & > a:not(:last-child) {
    margin-right: 8rem;
  }
`;

const StCompleteButton = styled.button`
  width: 182px;
  height: 40px;

  position: absolute;
  right: 8.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.blue200};
  border-radius: 6px;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};

  & > svg {
    margin-right: 1rem;
  }
`;
