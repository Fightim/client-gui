import useALB from "../../../service/hooks/instanceContext/useALB";
import usePublicCentos from "../../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../../service/hooks/instanceContext/usePublicUbuntu";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetInstance() {
  const { dragRef } = useDrag();
  const { publicUbuntuInstances, addPublicUbuntuInstances, removePublicUbuntuInstances } = usePublicUbuntu();
  const { publicCentosInstances, addPublicCentosInstances, removePublicCentosInstances } = usePublicCentos();

  function onDrop() {
    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPublicUbuntuInstances("" + Math.random());
        break;
      case instanceIconType.Centos:
        addPublicCentosInstances("" + Math.random());
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...publicUbuntuInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Ubuntu} />
        ))}
        {[...publicCentosInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Centos} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
