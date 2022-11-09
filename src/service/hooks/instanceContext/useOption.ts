import { useContext } from "react";

import { OptionContext } from "../../context/OptionContext";

export default function useOption() {
  const { instanceOption, handleInstanceId } = useContext(OptionContext);

  return { instanceOption, handleInstanceId };
}
