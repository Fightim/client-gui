import useMySQL from "../../../service/hooks/instanceContext/useMySQL";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetRDS() {
  const { dragRef, isDragging } = useDrag();
  const { instances, addInstance } = useMySQL();

  const MAX_SIZE = 2;
  const isAffordBox = instances.size < MAX_SIZE;
  const isCorrectBox = dragRef.current === instanceIconType.MySQL && isAffordBox;

  function onDrop() {
    if (!isCorrectBox) return;

    switch (dragRef.current) {
      case instanceIconType.MySQL:
        addInstance("" + Math.random());
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...instances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.MySQL} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
