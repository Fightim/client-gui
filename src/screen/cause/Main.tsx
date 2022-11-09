import styled from "styled-components";

import DragProvider from "../../service/context/DragContext";
import OptionProvider from "../../service/context/OptionContext";
import InfoSection from "./InfoSection";
import InstanceSection from "./InstanceSection";
import VPCSection from "./VPCSection";

export default function Main() {
  return (
    <StMainContainer>
      <DragProvider>
        <InstanceSection />
        <OptionProvider>
          <VPCSection />
          <InfoSection />
        </OptionProvider>
      </DragProvider>
    </StMainContainer>
  );
}

const StMainContainer = styled.main`
  height: calc(100vh - 5.8rem);

  display: flex;
  gap: 2rem;

  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.blue050};

  & > section {
    height: 100%;
  }
`;
