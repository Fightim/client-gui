import useRDS from "../../../service/hooks/instanceContext/useRDS";
import { useFetchRDS } from "../../../service/hooks/queries/rds";
import useDrag from "../../../service/hooks/useDrag";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import St from "../@styled/vpc.styled";
import DroppedInstanceIcon from "../instanceIcon/DroppedInstanceIcon";

export default function PrivateSubnetRDS() {
  const { dragRef, isDragging } = useDrag();
  const { rds } = useFetchRDS();
  const { instances, addInstance } = useRDS();

  const MAX_SIZE = 1;
  const isAffordBox = instances.size < MAX_SIZE;
  const isCorrectBox = dragRef.current === instanceIconType.RDS && isAffordBox;

  function onDrop() {
    if (!isCorrectBox) return;

    const name = prompt("인스턴스의 이름을 입력해주세요.", "");
    const masterUserName = prompt("마스터 유저의 이름을 입력해주세요.", "");
    const rdsPassword = prompt("rds에 접근할 비밀번호를 입력해주세요.", "");
    const rdsPasswordCheck = prompt("비밀번호를 다시 한 번 입력해주세요.", "");
    if (!name || !masterUserName || !rdsPassword || !rdsPasswordCheck || rdsPassword !== rdsPasswordCheck) return;

    switch (dragRef.current) {
      case instanceIconType.RDS:
        addInstance({
          name,
          masterUserName,
          rdsPassword,
          rdsPasswordCheck,
        });
        break;
      default:
        break;
    }
  }

  return (
    <St.VPCBox onDragOver={(e) => e.preventDefault()} onDrop={onDrop} isactive={isDragging && isCorrectBox}>
      <St.VPCBoxTitle>Database</St.VPCBoxTitle>
      <St.VPCBoxBody>
        {rds &&
          rds.map((rds) => (
            <DroppedInstanceIcon
              key={rds.informations.id}
              type={instanceIconType.RDS}
              instanceId={rds.informations.id}
            />
          ))}
        {[...instances].map((instance) => (
          <DroppedInstanceIcon key={instance.name} type={instanceIconType.RDS} instanceId={instance.name} />
        ))}
      </St.VPCBoxBody>
    </St.VPCBox>
  );
}
