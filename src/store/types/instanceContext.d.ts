/* eslint-disable no-unused-vars */
export interface InstanceContext {
  instances: Set<string>;
  addInstance: (instanceId: string) => void;
  removeInstance: (instanceId: string) => void;
}
