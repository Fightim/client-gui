import styled from "styled-components";

export const OptionTitle = styled.h3`
  width: 17rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid ${({ theme }) => theme.colors.blue300};
  border-radius: 1.5rem;

  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue300};
`;
