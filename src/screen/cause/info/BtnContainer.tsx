import styled from "styled-components";

import CheckBtn from "./CheckBtn";
import DeleteBtn from "./DeleteBtn";

const LOCAL_STORAGE_KEY = "user-token";

interface BtnContainerProps {
  instanceId: string;
  publicIp: string | null;
}

export default function BtnContainer(props: BtnContainerProps) {
  const { instanceId, publicIp } = props;

  return (
    <StBtnWrapper>
      <DeleteBtn instanceId={instanceId} />
      {publicIp && <CheckBtn hyperLink={`http://${publicIp}/${localStorage.getItem(LOCAL_STORAGE_KEY)}`} />}
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
