import styled from "styled-components";
import CheckBtn from "./CheckBtn";
import DeleteBtn from "./DeleteBtn";

export default function BtnContainer() {
  return (
    <StBtnWrapper>
      <DeleteBtn />
      <CheckBtn />
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
