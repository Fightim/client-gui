import ALBProvider from "../../service/context/ALBContext";
import MySQLProvider from "../../service/context/MySQLContext";
import T2Provider from "../../service/context/T2Context";
import Header from "../cause/Header";
import Main from "../cause/Main";

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
