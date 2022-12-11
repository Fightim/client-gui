import useDblClick from "../../../service/hooks/instanceContext/useDblClick";
import { useDeleteInstancesMutation } from "../../../service/hooks/queries/instances";
import { useDeleteRDSMutation } from "../../../service/hooks/queries/rds";
import { IcDelete } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { instanceIconType } from "../../../store/types/instanceIcon.d";
import { BtnWrapper } from "../@styled/button.styled";

interface DeleteBtnProps {
  instanceId: string;
}

export default function DeleteBtn(props: DeleteBtnProps) {
  const { instanceId } = props;
  const { instanceType, resetInstance } = useDblClick();

  const { mutateAsync: mutateAsyncDeleteInstances } = useDeleteInstancesMutation();
  const { mutateAsync: mutateAsyncDeleteRDS } = useDeleteRDSMutation();

  const handleClickDeleteBtn = async () => {
    switch (instanceType) {
      case instanceIconType.Ubuntu:
      case instanceIconType.Centos:
        await mutateAsyncDeleteInstances(instanceId);
        resetInstance();
        break;
      case instanceIconType.ALB:
        break;
      case instanceIconType.RDS:
        await mutateAsyncDeleteRDS(instanceId);
        resetInstance();
        break;
      default:
    }
  };

  return (
    <BtnWrapper type="button" onClick={handleClickDeleteBtn} bgcolor={theme.colors.red100}>
      <IcDelete />
      삭제하기
    </BtnWrapper>
  );
}
