import usePrivateCentos from "../../../service/hooks/instanceContext/usePrivateCentos";
import usePrivateUbuntu from "../../../service/hooks/instanceContext/usePrivateUbuntu";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetInstance() {
  const { dragRef } = useDrag();
  const { privateUbuntuInstances, addPrivateUbuntuInstances } = usePrivateUbuntu();
  const { privateCentosInstances, addPrivateCentosInstances } = usePrivateCentos();

  function onDrop() {
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
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...privateUbuntuInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Ubuntu} />
        ))}
        {[...privateCentosInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Centos} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
