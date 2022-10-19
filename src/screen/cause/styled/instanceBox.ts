import styled from "styled-components";

const InstanceBox = styled.article`
  border-radius: 0.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;

const BoxTitle = styled.header`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.6rem 0.6rem 0 0;

  background-color: ${({ theme }) => theme.colors.blue300};

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white100};
`;

const BoxBody = styled.div`
  height: calc(100% - 4rem);

  padding: 2.4rem 2.6rem;

  border-radius: 0 0 0.6rem 0.6rem;
`;

const St = {
  InstanceBox,
  BoxTitle,
  BoxBody,
};

export default St;
