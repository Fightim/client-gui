/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

import { IDblClickContext } from "../../store/types/dblClickContext.d";
import { InstanceIconType } from "../../store/types/instanceIcon.d";

export const DblClickContext = createContext<IDblClickContext>({
  instanceId: "",
  instanceType: null,
  handleInstanceId: (_id: string) => {},
  handleInstanceType: (_currentType: InstanceIconType) => {},
});

export default function DblClickProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instanceId, setInstanceId] = useState("");
  const [instanceType, setInstanceType] = useState<InstanceIconType | null>(null);

  const handleInstanceId = (id: string) => {
    setInstanceId(id);
  };

  const handleInstanceType = (currentType: InstanceIconType) => {
    setInstanceType(currentType);
  };

  return (
    <DblClickContext.Provider value={{ instanceId, instanceType, handleInstanceId, handleInstanceType }}>
      {children}
    </DblClickContext.Provider>
  );
}
