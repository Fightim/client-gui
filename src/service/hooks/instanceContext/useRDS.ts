import { useContext } from "react";

import { _RDSContext } from "../../context/RDSContext";

export default function useRDS() {
  const { instance, addInstance, resetCurrentRDS } = useContext(_RDSContext);

  return { instance, addInstance, resetCurrentRDS };
}
