import styled from "styled-components";

import { useInstanceOption } from "../../service/hooks/queries/instances";
import Options from "./info/Options";

// TODO ::
// 1. react-query 틀잡기
// 2. responseDto 옵셔널 타이핑
// 3. 각 옵셔널에 맞는 UI 제작

export default function InfoSection() {
  const { instanceOption } = useInstanceOption("123");
  console.log(instanceOption.data);

  return (
    <StInfoSection>
      <Options name={instanceOption.data.options.name} />
    </StInfoSection>
  );
}

const StInfoSection = styled.section`
  width: 31.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.9rem 1.6rem 1rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
