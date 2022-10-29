import { useContext } from "react";

import { T2Context } from "../../context/T2Context";

export default function usePublicCentos() {
  const { publicCentosInstances, addPublicCentosInstances, removePublicCentosInstances } = useContext(T2Context);

  return { publicCentosInstances, addPublicCentosInstances, removePublicCentosInstances };
}
