/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useRef } from "react";

import { InstanceIconType } from "../../store/types/instanceIcon.d";
import useBooleanState from "../hooks/useBooleanState";

export const DragContext = createContext({
  dragRef: { current: "" },
  isDragging: false,
  startDrag: () => {},
  endDrag: () => {},
});

export default function DragProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [isDragging, startDrag, endDrag] = useBooleanState();
  const dragRef = useRef<InstanceIconType | "">("");

  return <DragContext.Provider value={{ dragRef, isDragging, startDrag, endDrag }}>{children}</DragContext.Provider>;
}
