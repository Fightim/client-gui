import { useState } from "react";

import useDrag from "../../../service/hooks/useDrag";
import { InstanceIconType } from "../../../store/types/instanceIcon.d";
import InstanceIcon from "./InstanceIcon";

interface DraggableInstanceIconProps {
  type: InstanceIconType;
}
export default function DraggableInstanceIcon(props: DraggableInstanceIconProps) {
  const { type } = props;

  const [isActive, setIsActive] = useState(false);
  const { dragRef, startDrag, endDrag } = useDrag();

  function onDragStart() {
    startDrag();
    dragRef.current = type;
    // TODO :: onDragStart -> 가능한 박스 border 처리(onDragOver) -> context로 dragging 관리 (DraggingContext)
    // TODO :: onDragEnd -> 반대
  }

  function onDragEnd() {
    endDrag();
  }

  return (
    <strong
      draggable="true"
      style={{ display: "inline-block" }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onMouseOver={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <InstanceIcon type={type} active={isActive} />
    </strong>
  );
}
