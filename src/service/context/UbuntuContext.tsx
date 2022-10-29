/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";

import { InstanceContext } from "../../store/types/instanceContext.d";

export const UnbuntuContext = createContext<InstanceContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function UbuntuProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instances, setInstances] = useState<Set<string>>(new Set());

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
  }, []);

  const addInstance = (instanceId: string) => {
    setInstances(new Set(instances.add(instanceId)));
  };

  const removeInstance = (instanceId: string) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  return (
    <UnbuntuContext.Provider value={{ instances, addInstance, removeInstance }}>{children}</UnbuntuContext.Provider>
  );
}
