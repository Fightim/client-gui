import { IcApply } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

export default function CheckBtn({ hyperLink }: { hyperLink: string }) {
  return (
    <BtnWrapper href={hyperLink} target="_blank" bgcolor={theme.colors.blue200}>
      <IcApply />
      인스턴스 확인
    </BtnWrapper>
  );
}
