/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect } from "react";

import { LoadBalancerContext } from "../../store/types/instanceContext.d";
import useInstance from "../hooks/instanceContext/useInstance";

export const ALBContext = createContext<LoadBalancerContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function ALBProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instances, addInstance, removeInstance } = useInstance();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  return <ALBContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</ALBContext.Provider>;
}
