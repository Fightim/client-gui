/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

import { RDSContext } from "../../store/types/instanceContext";
import useRDSData from "../hooks/instanceContext/instanceData/useRDSData";

export const _RDSContext = createContext<RDSContext>({
  instance: null,
  addInstance: () => {},
  resetCurrentRDS: () => {},
});

export default function RDSProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instance, addInstance, resetCurrentRDS } = useRDSData();

  return <_RDSContext.Provider value={{ instance, addInstance, resetCurrentRDS }}>{children}</_RDSContext.Provider>;
}
