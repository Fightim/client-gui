import { useContext } from "react";

import { DblClickContext } from "../../context/DblClickContext";

export default function useDblClick() {
  const { instanceId, instanceType, handleInstanceId, handleInstanceType, resetInstance } = useContext(DblClickContext);

  return { instanceId, instanceType, handleInstanceId, handleInstanceType, resetInstance };
}
