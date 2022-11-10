import { useState } from "react";

export default function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, handleChangeValue };
}
