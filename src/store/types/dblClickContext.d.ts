import { InstanceIconType, InstanceIconTypeWithNull } from "./instanceIcon.d";

export interface IDblClickContext {
  instanceId: string;
  instanceType: InstanceIconTypeWithNull;
  handleInstanceId: (_id: string) => void;
  handleInstanceType: (_currentType: InstanceIconType) => void;
}
