import { useEffect } from "react";
import useInput from "../../../../service/hooks/useInput";
import St from "../../@styled/infoOptions.styled";

interface InstanceOptionsProps {
  name: string;
}

export default function InstanceOptions({ name }: InstanceOptionsProps) {
  const { value, setValue, handleChangeValue } = useInput(name);

  useEffect(() => {
    setValue(name);
  }, [name]);

  return (
    <>
      <St.Subject>설정 가능한 옵션</St.Subject>
      <St.SubTitle>name</St.SubTitle>
      <St.Input value={value} onChange={handleChangeValue} />
    </>
  );
}
