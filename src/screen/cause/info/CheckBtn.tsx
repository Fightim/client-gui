import { IcApply } from "../../../store/assets";
import theme from "../../../store/style/theme";
import { BtnWrapper } from "../@styled/button.styled";

interface CheckBtnProps {
  hyperLink: string;
}

export default function CheckBtn(props: CheckBtnProps) {
  const { hyperLink } = props;

  const handleClickLinkBtn = () => {
    window.location.href = hyperLink;
  };

  return (
    <BtnWrapper type="button" onClick={handleClickLinkBtn} bgcolor={theme.colors.blue200}>
      <IcApply />
      인스턴스 확인
    </BtnWrapper>
  );
}
