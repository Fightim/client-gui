import useALB from "../../../service/hooks/instanceContext/useALB";
import usePublicCentos from "../../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../../service/hooks/instanceContext/usePublicUbuntu";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PublicSubnet() {
  const { dragRef, isDragging } = useDrag();
  const { publicUbuntuInstances, addPublicUbuntuInstances } = usePublicUbuntu();
  const { publicCentosInstances, addPublicCentosInstances } = usePublicCentos();
  const { instances: ALBInstances, addInstance: addALBInstance } = useALB();

  const MAX_SIZE = 2;
  const isInstanceAffordBox = publicUbuntuInstances.size + publicCentosInstances.size < MAX_SIZE;
  const isALBAffordBox = ALBInstances.size === 0;
  const isCorrectBox =
    ((dragRef.current === instanceIconType.Centos || dragRef.current === instanceIconType.Ubuntu) &&
      isInstanceAffordBox) ||
    (dragRef.current === instanceIconType.ALB && isALBAffordBox);

  function onDrop() {
    if (!isCorrectBox) return;

    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPublicUbuntuInstances("" + Math.random());
        break;
      case instanceIconType.Centos:
        addPublicCentosInstances("" + Math.random());
        break;
      case instanceIconType.ALB:
        addALBInstance("" + Math.random());
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Public Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...publicUbuntuInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Ubuntu} />
        ))}
        {[...publicCentosInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.Centos} />
        ))}
        {[...ALBInstances].map((instance, i) => (
          <DroppedInstanceIcon key={i} type={instanceIconType.ALB} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
