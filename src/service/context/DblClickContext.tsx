/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

import { IDblClickContext } from "../../store/types/dblClickContext.d";
import { InstanceIconTypeWithNull } from "../../store/types/instanceIcon.d";

export const DblClickContext = createContext<IDblClickContext>({
  instanceId: "",
  instanceType: null,
  handleInstanceId: (_id: string) => {},
  handleInstanceType: (_currentType: InstanceIconTypeWithNull) => {},
  resetInstance: () => {},
});

export default function DblClickProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [instanceId, setInstanceId] = useState("");
  const [instanceType, setInstanceType] = useState<InstanceIconTypeWithNull>(null);

  const handleInstanceId = (id: string) => {
    setInstanceId(id);
  };

  const handleInstanceType = (currentType: InstanceIconTypeWithNull) => {
    setInstanceType(currentType);
  };

  const resetInstance = () => {
    handleInstanceId("");
    handleInstanceType(null);
  };

  return (
    <DblClickContext.Provider value={{ instanceId, instanceType, handleInstanceId, handleInstanceType, resetInstance }}>
      {children}
    </DblClickContext.Provider>
  );
}
