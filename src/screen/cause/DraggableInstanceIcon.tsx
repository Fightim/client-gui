import InstanceIcon from "./InstanceIcon";

interface DraggableInstanceIconProps {
  type: 0 | 1 | 2;
}

export default function DraggableInstanceIcon(props: DraggableInstanceIconProps) {
  return (
    <div
      draggable="true"
      onDragStart={(e) => console.log(e)}
      onDragEnd={(e) => console.log(e)}
      onDrag={(e) => console.log(e)}>
      <InstanceIcon {...props} active={true} />
    </div>
  );
}
