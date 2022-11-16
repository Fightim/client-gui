import { useContext } from "react";

import { ALBContext } from "../../context/ALBContext";

export default function useALB() {
  const { instances, addInstance, removeInstance } = useContext(ALBContext);

  return { instances, addInstance, removeInstance };
}
