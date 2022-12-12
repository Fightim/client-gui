import { useEffect, useState } from "react";

import { InstanceData } from "../../../../store/types/instanceContext";

export default function useInstanceData() {
  const [instances, setInstances] = useState<Set<InstanceData>>(new Set());

  const addInstance = (currentInstance: InstanceData) => {
    setInstances(new Set(instances.add(currentInstance)));
  };

  const removeInstance = (currentInstance: InstanceData) => {
    instances.delete(currentInstance);
    setInstances(new Set(instances));
  };

  const resetInstance = () => {
    setInstances(new Set());
  }

  useEffect(() => {
    console.log('instances', instances)
  }, [instances])


  return { instances, addInstance, removeInstance, resetInstance };
}
