/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

export const DblClickContext = createContext({
  instanceId: "",
  handleInstanceId: (_id: string) => {},
});

export default function DblClickProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instanceId, setInstanceId] = useState("");

  const handleInstanceId = (id: string) => {
    setInstanceId(id);
  };

  return <DblClickContext.Provider value={{ instanceId, handleInstanceId }}>{children}</DblClickContext.Provider>;
}
