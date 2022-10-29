import { useContext } from "react";

import { DragContext } from "../context/DragContext";

export default function useDrag() {
  const { dragRef, isDragging, startDrag, endDrag } = useContext(DragContext);

  return { dragRef, isDragging, startDrag, endDrag };
}
