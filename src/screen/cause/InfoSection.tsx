import styled from "styled-components";

export default function InfoSection() {
  return <StInfoSection>right</StInfoSection>;
}

const StInfoSection = styled.section`
  width: 31.7rem;

  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;
