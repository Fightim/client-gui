import styled from "styled-components";

import CheckBtn from "./CheckBtn";
import DeleteBtn from "./DeleteBtn";

const LOCAL_STORAGE_KEY = "user-token";

interface BtnContainerProps {
  instanceId: string;
  publicIp: string | null;
  isUrlFromGithub?: boolean;
}

export default function BtnContainer(props: BtnContainerProps) {
  const { instanceId, publicIp, isUrlFromGithub } = props;

  const HYPER_LINK = isUrlFromGithub
    ? `http://${publicIp}`
    : `http://${publicIp}/${localStorage.getItem(LOCAL_STORAGE_KEY)}`;

  return (
    <StBtnWrapper>
      <DeleteBtn instanceId={instanceId} />
      {publicIp && <CheckBtn hyperLink={HYPER_LINK} />}
    </StBtnWrapper>
  );
}

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
