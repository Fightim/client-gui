import styled from "styled-components";

import { useInstanceOption } from "../../service/hooks/queries/instances";

// TODO ::
// 1. react-query 틀잡기
// 2. responseDto 옵셔널 타이핑
// 3. 각 옵셔널에 맞는 UI 제작

export default function InfoSection() {
  const { instanceOption } = useInstanceOption("123");
  console.log(instanceOption);

  return <StInfoSection>right</StInfoSection>;
}

const StInfoSection = styled.section`
  width: 31.7rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
