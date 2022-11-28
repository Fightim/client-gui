import { useCallback, useState } from "react";

import { InstanceData } from "../../../../store/types/instanceContext";

export default function useInstanceData() {
  const [instances, setInstances] = useState<Set<InstanceData>>(new Set());

  const addInstance = useCallback((instanceId: InstanceData) => {
    setInstances(new Set(instances.add(instanceId)));
  }, []);

  const removeInstance = (instanceId: InstanceData) => {
    instances.delete(instanceId);
    setInstances(new Set(instances));
  };

  const resetInstance = () => {
    setInstances(new Set());
  }

  return { instances, addInstance, removeInstance, resetInstance };
}
