import { IcDelete } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

export default function DeleteBtn() {
  return (
    <BtnWrapper bgcolor={theme.colors.red100}>
      <IcDelete />
      삭제하기
    </BtnWrapper>
  );
}
