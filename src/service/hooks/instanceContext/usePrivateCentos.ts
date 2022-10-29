import { useContext } from "react";

import { T2Context } from "../../context/T2Context";

export default function usePrivateCentos() {
  const { privateCentosInstances, addPrivateCentosInstances, removePrivateCentosInstances } = useContext(T2Context);

  return { privateCentosInstances, addPrivateCentosInstances, removePrivateCentosInstances };
}
