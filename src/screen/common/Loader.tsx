import ReactDOM from "react-dom";
import styled from "styled-components";

import { GifLoader } from "../../store/assets";

export default function Loader() {
  return ReactDOM.createPortal(
    <StLoaderWrapper>
      <img src={GifLoader} alt="로딩" width={118} height={118} />
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
