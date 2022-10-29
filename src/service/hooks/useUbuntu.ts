import { useContext } from "react";

import { UnbuntuContext } from "../context/UbuntuContext";

export default function useLoader() {
  const { instances, addInstance, removeInstance } = useContext(UnbuntuContext);

  return {
    instances,
    addInstance,
    removeInstance,
  };
}
