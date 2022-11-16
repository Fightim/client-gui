/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect } from "react";

import { RDSContext } from "../../store/types/instanceContext.d";
import useMySQLData from "../hooks/instanceContext/instanceData/useMySQLData";

export const MySQLContext = createContext<RDSContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function MySQLProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const { instances, addInstance, removeInstance } = useMySQLData();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  return <MySQLContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</MySQLContext.Provider>;
}
