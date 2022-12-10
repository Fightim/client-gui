import { useState } from "react";

import { RDSData } from "../../../../store/types/instanceContext";

export default function useRDSData() {
  const [instances, setInstances] = useState<Set<RDSData>>(new Set());

  const addInstance = (currentInstance: RDSData) => {
    setInstances(new Set(instances.add(currentInstance)));
  };

  const removeInstance = (currentInstance: RDSData) => {
    instances.delete(currentInstance);
    setInstances(new Set(instances));
  };

  return { instances, addInstance, removeInstance };
}
