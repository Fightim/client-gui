import ALBProvider from "../../service/context/ALBContext";
import RDSProvider from "../../service/context/RDSContext";
import T2Provider from "../../service/context/T2Context";
import Header from "../cause/Header";
import Main from "../cause/Main";

export default function Cause() {
  return (
    <T2Provider>
      <RDSProvider>
        <ALBProvider>
          <Header />
          <Main />
        </ALBProvider>
      </RDSProvider>
    </T2Provider>
  );
}
