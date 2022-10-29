import ALBProvider from "../../service/context/ALBContext";
import MySQLProvider from "../../service/context/MySQLContext";
import T2Provider from "../../service/context/T2Context";
import Main from "../cause/Main";
import Header from "../common/Header";

export default function Cause() {
  return (
    <T2Provider>
      <MySQLProvider>
        <ALBProvider>
          <Header />
          <Main />
        </ALBProvider>
      </MySQLProvider>
    </T2Provider>
  );
}
