import styled from "styled-components";

import useInput from "../../../service/hooks/useInput";
import { OptionTitle } from "../@styled/info.styled";

interface OptionsProps {
  name: string;
}

export default function Options({ name }: OptionsProps) {
  const { value, handleChangeValue } = useInput(name);

  return (
    <>
      <StSubject>설정 가능한 옵션</StSubject>
      <StSubTitle>name</StSubTitle>
      <StInput value={value} onChange={handleChangeValue} />
    </>
  );
}

const StSubject = styled(OptionTitle)`
  margin-bottom: 1.4rem;
`;

const StSubTitle = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;

  margin-bottom: 0.6rem;
`;

const StInput = styled.input`
  width: 100%;
  height: 3rem;

  padding-left: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.7rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gary100};
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.blue030};
`;
