import { useEffect } from "react";
import useInput from "../../../../service/hooks/useInput";
import St from "../../@styled/infoOptions.styled";

interface InstanceOptionsProps {
  name: string;
  githubUrl: string;
}

export default function InstanceOptions({ name, githubUrl }: InstanceOptionsProps) {
  const { value: nameValue, setValue: setNameValue, handleChangeValue: handleChangeNameValue } = useInput(name);
  const {
    value: githubUrlValue,
    setValue: setGithubUrlValue,
    handleChangeValue: handleChangeGithubUrlValue,
  } = useInput(githubUrl);

  useEffect(() => {
    setNameValue(name);
  }, [name]);

  useEffect(() => {
    setGithubUrlValue(githubUrl);
  }, [githubUrl]);

  return (
    <>
      <St.Subject>설정 가능한 옵션</St.Subject>
      <St.SubTitle>Name</St.SubTitle>
      <St.Input value={nameValue} onChange={handleChangeNameValue} />
      <St.SubTitle>Github URL</St.SubTitle>
      <St.Input value={githubUrlValue} onChange={handleChangeGithubUrlValue} />
    </>
  );
}
