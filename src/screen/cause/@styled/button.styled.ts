import styled from "styled-components";

export const BtnWrapper = styled.a<{ bgcolor: string }>`
  height: 3.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.8rem;

  border-radius: 0.6rem;

  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ theme }) => theme.colors.white100};
  font-size: 1.6rem;
  font-weight: 600;
`;
