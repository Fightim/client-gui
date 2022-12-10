import { useState } from "react";

import { RDSData } from "../../../../store/types/instanceContext";

export default function useRDSData() {
  const [instance, setInstance] = useState<RDSData | null>(null);

  const addInstance = (currentInstance: RDSData) => {
    setInstance({ ...currentInstance });
  };

  const resetCurrentRDS = () => {
    setInstance(null);
  }

  return { instance, addInstance, resetCurrentRDS };
}
