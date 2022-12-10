import usePrivateCentos from "../../../service/hooks/instanceContext/usePrivateCentos";
import usePrivateUbuntu from "../../../service/hooks/instanceContext/usePrivateUbuntu";
import {
  useFetchPrivateCentosInstances,
  useFetchPrivateUbuntuInstances,
} from "../../../service/hooks/queries/instances";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetInstance() {
  const { dragRef, isDragging } = useDrag();
  const { instances: fetchedPrivateUbuntuInstances } = useFetchPrivateUbuntuInstances();
  const { instances: fetchedPrivateCentosInstances } = useFetchPrivateCentosInstances();
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

    let githubUrl = prompt(
      "프로비저닝을 위한 깃허브 레포지터리 링크를 입력해주세요. (ex :: https://github.com/qkrwjdan/EBSStudySample)",
      "",
    );
    if (!githubUrl) githubUrl = null;

    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPrivateUbuntuInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "UBUNTU",
          tier: "WAS",
          name,
          githubUrl,
        });
        break;
      case instanceIconType.Centos:
        addPrivateCentosInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "CENTOS",
          tier: "WAS",
          name,
          githubUrl,
        });
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Back-End</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {fetchedPrivateUbuntuInstances &&
          fetchedPrivateUbuntuInstances.map((instance) => (
            <DroppedInstanceIcon
              key={instance.informations.id}
              type={instanceIconType.Ubuntu}
              instanceId={instance.informations.id}
            />
          ))}
        {[...privateUbuntuInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Ubuntu} instanceId={instance.id} />
        ))}
        {fetchedPrivateCentosInstances &&
          fetchedPrivateCentosInstances.map((instance) => (
            <DroppedInstanceIcon
              key={instance.informations.id}
              type={instanceIconType.Centos}
              instanceId={instance.informations.id}
            />
          ))}
        {[...privateCentosInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Centos} instanceId={instance.id} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
