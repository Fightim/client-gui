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

  const MAX_SIZE = 1;
  const isAffordBox = privateUbuntuInstances.size + privateCentosInstances.size < MAX_SIZE;
  const isCorrectBox =
    (dragRef.current === instanceIconType.Centos || dragRef.current === instanceIconType.Ubuntu) && isAffordBox;

  function onDrop() {
    if (!isCorrectBox) return;

    const name = prompt("인스턴스의 이름을 입력해주세요.", "");
    if (!name) return;

    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPrivateUbuntuInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "UBUNTU",
          tier: "WAS",
          name: "asdf",
        });
        break;
      case instanceIconType.Centos:
        addPrivateCentosInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "CENTOS",
          tier: "WAS",
          name: "asdf",
        });
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Private Subnet</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {[...privateUbuntuInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Ubuntu} instanceId={instance.id} />
        ))}
        {[...privateCentosInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Centos} instanceId={instance.id} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
