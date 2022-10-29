import styled from "styled-components";

import Style from "./instanceBox";

const VPCBox = styled.article`
  box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.18);
  border-radius: 0.8rem;
`;

const VPCBoxTitle = styled(Style.BoxTitle)`
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.blue030};

  font-weight: 400;
  color: ${({ theme }) => theme.colors.black100};
`;

const VPCBoxBody = styled(Style.BoxBody)`
  position: relative;

  height: calc(100% - 3rem);

  padding: 2rem 2.6rem;

  background-color: ${({ theme }) => theme.colors.white100};
`;

const St = {
  VPCBox,
  VPCBoxTitle,
  VPCBoxBody,
};

export default St;
