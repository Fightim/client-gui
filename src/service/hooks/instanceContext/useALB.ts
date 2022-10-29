import { useContext } from "react";

import { ALBContext } from "../../context/ALBContext";

export default function usePrivateCentos() {
  const { instances, addInstance, removeInstance } = useContext(ALBContext);

  return { instances, addInstance, removeInstance };
}
