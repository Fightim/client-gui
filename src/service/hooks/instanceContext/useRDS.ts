import { useContext } from "react";

import { _RDSContext } from "../../context/RDSContext";

export default function useRDS() {
  const { instances, addInstance, removeInstance } = useContext(_RDSContext);

  return { instances, addInstance, removeInstance };
}
