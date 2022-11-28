import { useDeleteInstancesMutation } from "../../../service/hooks/queries/instances";
import { IcDelete } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

interface DeleteBtnProps {
  instanceId: string;
}

export default function DeleteBtn(props: DeleteBtnProps) {
  const { instanceId } = props;

  const { mutateAsync: mutateAsyncDeleteInstances } = useDeleteInstancesMutation();

  const handleClickDeleteBtn = async () => {
    await mutateAsyncDeleteInstances(instanceId);
  };

  return (
    <BtnWrapper type="button" onClick={handleClickDeleteBtn} bgcolor={theme.colors.red100}>
      <IcDelete />
      삭제하기
    </BtnWrapper>
  );
}
