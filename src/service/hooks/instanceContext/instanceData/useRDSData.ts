import { useState } from "react";

import { RDSData } from "../../../../store/types/instanceContext";

export default function useRDSData() {
  const [instances, setInstances] = useState<Set<RDSData>>(new Set());

  const addInstance = (instanceId: RDSData) => {
    setInstances(new Set(instances.add(instanceId)));
  };

  const removeInstance = (instanceId: RDSData) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  return { instances, addInstance, removeInstance };
}
