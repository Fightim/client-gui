import useALB from "../../../service/hooks/instanceContext/useALB";
import usePublicCentos from "../../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../../service/hooks/instanceContext/usePublicUbuntu";
import { useFetchPublicCentosInstances, useFetchPublicUbuntuInstances } from "../../../service/hooks/queries/instances";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PublicSubnet() {
  const { dragRef, isDragging } = useDrag();
  const { instances: fetchedPublicUbuntuInstances } = useFetchPublicUbuntuInstances();
  const { instances: fetchedPublicCentosInstances } = useFetchPublicCentosInstances();
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

    const name = prompt("인스턴스의 이름을 입력해주세요.", "");
    if (!name) return;

    let githubUrl = prompt(
      "프로비저닝을 위한 깃허브 레포지터리 링크를 입력해주세요.\n(ex :: https://github.com/qkrwjdan/EBSStudySample)",
      "",
    );
    if (!githubUrl) githubUrl = null;

    switch (dragRef.current) {
      case instanceIconType.Ubuntu:
        addPublicUbuntuInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "UBUNTU",
          tier: "WEBSERVER",
          name,
          githubUrl,
        });
        break;
      case instanceIconType.Centos:
        addPublicCentosInstances({
          id: "" + Math.random(),
          type: "t2.micro",
          os: "CENTOS",
          tier: "WEBSERVER",
          name,
          githubUrl,
        });
        break;
      case instanceIconType.ALB:
        addALBInstance({
          id: "" + Math.random(),
          name,
        });
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Front-End</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {fetchedPublicUbuntuInstances &&
          fetchedPublicUbuntuInstances.map((instance) => (
            <DroppedInstanceIcon
              key={instance.informations.id}
              type={instanceIconType.Ubuntu}
              instanceId={instance.informations.id}
              isActive={true}
            />
          ))}
        {fetchedPublicCentosInstances &&
          fetchedPublicCentosInstances.map((instance) => (
            <DroppedInstanceIcon
              key={instance.informations.id}
              type={instanceIconType.Centos}
              instanceId={instance.informations.id}
              isActive={true}
            />
          ))}
        {[...publicUbuntuInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Ubuntu} instanceId={instance.id} />
        ))}
        {[...publicCentosInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.Centos} instanceId={instance.id} />
        ))}
        {[...ALBInstances].map((instance) => (
          <DroppedInstanceIcon key={instance.id} type={instanceIconType.ALB} instanceId={instance.id} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
