import InstanceIcon from "./InstanceIcon";

interface DraggableInstanceIconProps {
  type: 0 | 1 | 2;
}

function X() {
  const a = 1;
}

export default function DraggableInstanceIcon(props: DraggableInstanceIconProps) {
  return (
    <div draggable="true" onDragStart={X} onDragEnd={X} onDrag={X}>
      <InstanceIcon {...props} active={true} />
    </div>
  );
}
