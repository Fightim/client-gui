/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from "react";

export const OptionContext = createContext({
  instanceOption: {},
  handleInstanceId: (_id: string) => {},
});

export default function OptionProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instanceId, setInstanceId] = useState("");
  // TODO :: 옵션 타이핑
  const [instanceOption, setInstanceOption] = useState({});

  const handleInstanceId = (id: string) => {
    setInstanceId(id);
  };

  useEffect(() => {
    // TODO :: if(instanceId.length > 1) 통신값 받아오기
  }, [instanceId]);

  return <OptionContext.Provider value={{ instanceOption, handleInstanceId }}>{children}</OptionContext.Provider>;
}
