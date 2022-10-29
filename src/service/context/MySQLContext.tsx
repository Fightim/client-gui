/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect } from "react";

import { RDSContext } from "../../store/types/instanceContext.d";
import useInstance from "../hooks/instanceContext/useInstance";

export const MySQLContext = createContext<RDSContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function MySQLProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instances, addInstance, removeInstance } = useInstance();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  return <MySQLContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</MySQLContext.Provider>;
}
