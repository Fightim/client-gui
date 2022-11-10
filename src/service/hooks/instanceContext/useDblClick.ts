import { useContext } from "react";

import { DblClickContext } from "../../context/DblClickContext";

export default function useDblClick() {
  const { instanceId, handleInstanceId } = useContext(DblClickContext);

  return { instanceId, handleInstanceId };
}
