import IcALB from "./alb.svg";
import IcMySQL from "./mysql.svg";
import IcT2 from "./t2.svg";

export const droppedInstanceIcons = {
  T2_UBUNTU: {
    element: <img src={IcT2} alt="ubuntu" style={{ margin: "1.1rem" }} />,
    name: "t2.micro ubuntu",
  },
  T2_CENTOS: {
    element: <img src={IcT2} alt="centos" style={{ margin: "1.1rem" }} />,
    name: "t2.micro centos",
  },
  ALB: {
    element: <img src={IcALB} alt="alb" />,
    name: "ALB",
  },
  MYSQL: {
    element: <img src={IcMySQL} alt="mysql" style={{ margin: "1.1rem" }} />,
    name: "MySQL",
  },
};