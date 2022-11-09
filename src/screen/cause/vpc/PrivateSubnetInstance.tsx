import usePrivateCentos from "../../../service/hooks/instanceContext/usePrivateCentos";
import usePrivateUbuntu from "../../../service/hooks/instanceContext/usePrivateUbuntu";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetInstance() {
  const { dragRef, isDragging } = useDrag();
  const { privateUbuntuInstances, addPrivateUbuntuInstances } = usePrivateUbuntu();
  const { privateCentosInstances, addPrivateCentosInstances } = usePrivateCentos();

  const MAX_SIZE = 2;
  const isAffordBox = privateUbuntuInstances.size + privateCentosInstances.size < MAX_SIZE;
  const isCorrectBox =
    (dragRef.current === instanceIconType.Centos || dragRef.current === instanceIconType.Ubuntu) && isAffordBox;

  function onDrop() {
    if (!isCorrectBox) return;

    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPrivateUbuntuInstances("" + Math.random());
        break;
      case instanceIconType.Centos:
        addPrivateCentosInstances("" + Math.random());
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...privateUbuntuInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Ubuntu} instanceId={instance} />
        ))}
        {[...privateCentosInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Centos} instanceId={instance} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
