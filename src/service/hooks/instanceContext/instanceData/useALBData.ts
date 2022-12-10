import { useState } from "react";

import { ALBData } from "../../../../store/types/instanceContext";

export default function useALBData() {
  const [instances, setInstances] = useState<Set<ALBData>>(new Set());

  const addInstance = (currentInstance: ALBData) => {
    setInstances(new Set(instances.add(currentInstance)));
  };

  const removeInstance = (currentInstance: ALBData) => {
    instances.delete(currentInstance);
    setInstances(new Set(instances));
  };

  return { instances, addInstance, removeInstance };
}
