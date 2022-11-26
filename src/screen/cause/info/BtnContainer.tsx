import styled from "styled-components";
import CheckBtn from "./CheckBtn";
import DeleteBtn from "./DeleteBtn";

interface BtnContainerProps {
  instanceId: string;
  publicIp: string | null;
}

export default function BtnContainer(props: BtnContainerProps) {
  const { instanceId, publicIp } = props;

  return (
    <StBtnWrapper>
      <DeleteBtn />
      <CheckBtn hyperLink={`http://${publicIp}/${localStorage.getItem("user-token")}`} />
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
