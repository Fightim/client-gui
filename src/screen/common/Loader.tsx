import ReactDOM from "react-dom";
import styled from "styled-components";

import { GifLoader } from "../../store/assets";

export default function Loader() {
  return ReactDOM.createPortal(
    <StLoaderWrapper>
      <StLoaderImg src={GifLoader} alt="loading" />
    </StLoaderWrapper>,
    document.querySelector("#root") as Element,
  );
}

const StLoaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 20%);
`;

const StLoaderImg = styled.img`
  width: 11.8rem;
  height: 11.8rem;
`;
