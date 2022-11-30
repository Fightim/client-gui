import { IcApply } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

interface CheckBtnProps {
  hyperLink: string;
}

export default function CheckBtn(props: CheckBtnProps) {
  const { hyperLink } = props;

  return (
    <BtnWrapper type="button" bgcolor={theme.colors.blue200}>
      <a href={hyperLink} target="_blank">
        <IcApply />
        인스턴스 확인
      </a>
    </BtnWrapper>
  );
}
