/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect } from "react";

import { RDSContext } from "../../store/types/instanceContext";
import useRDSData from "../hooks/instanceContext/instanceData/useRDSData";

export const _RDSContext = createContext<RDSContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function RDSProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instances, addInstance, removeInstance } = useRDSData();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  return <_RDSContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</_RDSContext.Provider>;
}
