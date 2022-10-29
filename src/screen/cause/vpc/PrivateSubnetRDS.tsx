import useMySQL from "../../../service/hooks/instanceContext/useMySQL";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetRDS() {
  const { dragRef } = useDrag();
  const { instances, addInstance } = useMySQL();

  function onDrop() {
    switch (dragRef.current) {
      case instanceIconType.MySQL:
        addInstance("" + Math.random());
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...instances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.MySQL} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
