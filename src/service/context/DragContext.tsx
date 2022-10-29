/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, createRef } from "react";

import useBooleanState from "../hooks/useBooleanState";

export const DragContext = createContext({
  dragRef: createRef(),
  isDragging: false,
  startDrag: () => {},
  endDrag: () => {},
});
const dragRef = createRef();

export default function DragProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [isDragging, startDrag, endDrag] = useBooleanState();

  return <DragContext.Provider value={{ dragRef, isDragging, startDrag, endDrag }}>{children}</DragContext.Provider>;
}
