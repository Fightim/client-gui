import { useState } from "react";

import InstanceIcon from "./InstanceIcon";

interface DraggableInstanceIconProps {
  type: 0 | 1 | 2;
}

function handleDragForActiveBox() {
  // TODO :: onDragStart -> 가능한 박스 border 처리 -> context로 dragging 관리 (DraggingContext)
  // TODO :: onDragEnd -> 반대
}

export default function DraggableInstanceIcon(props: DraggableInstanceIconProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      draggable="true"
      onDragStart={handleDragForActiveBox}
      onDragEnd={handleDragForActiveBox}
      onMouseOver={() => setIsActive(true)}
      onFocus={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <InstanceIcon {...props} active={isActive} />
    </div>
  );
}
