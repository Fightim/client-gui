import { CreateInstanceDto } from "./requestDto";

export interface InstanceData extends CreateInstanceDto {
  id: string;
}

export interface InstanceContext {
  publicUbuntuInstances: Set<InstanceData>;
  addPublicUbuntuInstances: (_instanceId: InstanceData) => void;
  removePublicUbuntuInstances: (_instanceId: InstanceData) => void;
  publicCentosInstances: Set<InstanceData>;
  addPublicCentosInstances: (_instanceId: InstanceData) => void;
  removePublicCentosInstances: (_instanceId: InstanceData) => void;
  privateUbuntuInstances: Set<InstanceData>;
  addPrivateUbuntuInstances: (_instanceId: InstanceData) => void;
  removePrivateUbuntuInstances: (_instanceId: InstanceData) => void;
  privateCentosInstances: Set<InstanceData>;
  addPrivateCentosInstances: (_instanceId: InstanceData) => void;
  removePrivateCentosInstances: (_instanceId: InstanceData) => void;
}

export interface RDSContext {
  instances: Set<string>;
  addInstance: (_instanceId: string) => void;
  removeInstance: (_instanceId: string) => void;
}

export interface LoadBalancerContext {
  instances: Set<string>;
  addInstance: (_instanceId: string) => void;
  removeInstance: (_instanceId: string) => void;
}
