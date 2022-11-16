import { useState } from "react";

export default function useALBData() {
  const [instances, setInstances] = useState<Set<string>>(new Set());

  const addInstance = (instanceId: string) => {
    setInstances(new Set(instances.add(instanceId)));
  };

  const removeInstance = (instanceId: string) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  return { instances, addInstance, removeInstance };
}
