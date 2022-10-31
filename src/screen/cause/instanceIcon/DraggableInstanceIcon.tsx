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
