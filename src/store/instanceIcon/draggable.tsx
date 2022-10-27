import styled from "styled-components";

import { IcALB, IcMySQL, IcT2 } from "../assets";

const StIcT2 = styled(IcT2)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const StIcALB = styled(IcALB)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

const StIcMySQL = styled(IcMySQL)`
  width: 3.8rem;
  height: 3.8rem;

  margin-right: 1.1rem;
`;

export const instanceIcons = {
  T2_UBUNTU: {
    element: <StIcT2 />,
    name: "t2.micro ubuntu",
  },
  T2_CENTOS: {
    element: <StIcT2 />,
    name: "t2.micro centos",
  },
  ALB: {
    element: <StIcALB />,
    name: "ALB",
  },
  MYSQL: {
    element: <StIcMySQL />,
    name: "MySQL",
  },
};
