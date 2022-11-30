/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

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

  return <_RDSContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</_RDSContext.Provider>;
}
