import { useState } from "react";

import { ALBData } from "../../../../store/types/instanceContext";

export default function useALBData() {
  const [instances, setInstances] = useState<Set<ALBData>>(new Set());

  const addInstance = (instanceId: ALBData) => {
    setInstances(new Set(instances.add(instanceId)));
  };

  const removeInstance = (instanceId: ALBData) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  return { instances, addInstance, removeInstance };
}
