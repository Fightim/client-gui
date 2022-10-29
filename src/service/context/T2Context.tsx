/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";

import { InstanceContext } from "../../store/types/instanceContext.d";

export const T2Context = createContext<InstanceContext>({
  instances: new Set(),
  addInstance: () => {},
  removeInstance: () => {},
});

export default function T2Provider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instances, setInstances] = useState<Set<string>>(new Set());

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
    // TODO :: 1. instance API
    // TODO :: 2. Public/Private, ubuntu/centos 4가지 분류하여 setState
    // TODO :: 3. 4가지 커스텀훅으로 분리하여 전달
  }, []);

  const addInstance = (instanceId: string) => {
    setInstances(new Set(instances.add(instanceId)));
  };

  const removeInstance = (instanceId: string) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  return <T2Context.Provider value={{ instances, addInstance, removeInstance }}>{children}</T2Context.Provider>;
}
