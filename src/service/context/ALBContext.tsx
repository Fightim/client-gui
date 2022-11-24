/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect } from "react";

import { LoadBalancerContext } from "../../store/types/instanceContext.d";
import useALBData from "../hooks/instanceContext/instanceData/useALBData";

export const ALBContext = createContext<LoadBalancerContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function ALBProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instances, addInstance, removeInstance } = useALBData();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  return <ALBContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</ALBContext.Provider>;
}
