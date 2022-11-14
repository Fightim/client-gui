import useInput from "../../../../service/hooks/useInput";
import St from "../../@styled/infoOptions.styled";

interface RDSOptionsProps {
  name: string;
  masterUserName: string;
}

export default function RDSOptions(props: RDSOptionsProps) {
  const { name, masterUserName } = props;

  const { value: nameValue, handleChangeValue: handleChangeNameValue } = useInput(name);
  const { value: masterNameValue, handleChangeValue: handleChangeMasterNameValue } = useInput(masterUserName);

  return (
    <>
      <St.Subject>설정 가능한 옵션</St.Subject>
      <St.SubTitle>name</St.SubTitle>
      <St.Input value={nameValue} onChange={handleChangeNameValue} />
      <St.SubTitle>master name</St.SubTitle>
      <St.Input value={masterNameValue} onChange={handleChangeMasterNameValue} />
    </>
  );
}
