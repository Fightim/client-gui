/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

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

  return <ALBContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</ALBContext.Provider>;
}
