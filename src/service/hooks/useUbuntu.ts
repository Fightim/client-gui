import { useContext } from "react";

import { T2Context } from "../context/T2Context";

export default function useLoader() {
  const { instances, addInstance, removeInstance } = useContext(T2Context);

  return {
    instances,
    addInstance,
    removeInstance,
  };
}
