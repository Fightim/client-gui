import styled from "styled-components";

import { IcArrowBlue } from "../../../store/assets";

export default function ContentWrapper(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <StContentWrapper>
      <StIcArrowBlue />
      <StContent>{children}</StContent>
    </StContentWrapper>
  );
}

const StContentWrapper = styled.div`
  position: relative;

  padding-left: 0.9rem;
  margin-bottom: 0.9rem;

  align-self: start;
`;

const StIcArrowBlue = styled(IcArrowBlue)`
  position: absolute;
  top: 0.6rem;
  left: 0;
`;

const StContent = styled.strong`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.1rem;
`;
