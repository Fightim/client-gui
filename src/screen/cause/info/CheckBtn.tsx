import { IcApply } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

export default function CheckBtn() {
  return (
    <BtnWrapper bgcolor={theme.colors.blue200}>
      <IcApply />
      인스턴스 확인
    </BtnWrapper>
  );
}
