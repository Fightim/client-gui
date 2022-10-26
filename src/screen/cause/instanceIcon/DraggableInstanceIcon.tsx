import { useState } from "react";

import { InstanceIconType } from "../../../store/types/instanceIcon";
import InstanceIcon from "./InstanceIcon";

interface DraggableInstanceIconProps {
  type: InstanceIconType;
}

function handleDragForActiveBox() {
  // TODO :: onDragStart -> 가능한 박스 border 처리(onDragOver) -> context로 dragging 관리 (DraggingContext)
  // TODO :: onDragEnd -> 반대
}

export default function DraggableInstanceIcon(props: DraggableInstanceIconProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <strong
      draggable="true"
      style={{ display: "inline-block" }}
      onDragStart={handleDragForActiveBox}
      onDragEnd={handleDragForActiveBox}
      onMouseOver={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <InstanceIcon type={props.type} active={isActive} />
    </strong>
  );
}
