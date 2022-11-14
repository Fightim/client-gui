import { InstanceIconType } from "./instanceIcon.d";

export interface IDblClickContext {
  instanceId: string;
  instanceType: InstanceIconType | null;
  handleInstanceId: (_id: string) => void;
  handleInstanceType: (_currentType: InstanceIconType) => void;
}
