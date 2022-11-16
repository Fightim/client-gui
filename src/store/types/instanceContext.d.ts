import { CreateInstanceDto, CreateLoadBalancerDto, CreateRdsDto } from "./requestDto";

export interface InstanceData extends CreateInstanceDto {
  id: string;
}

export interface ALBData extends CreateLoadBalancerDto {
  id: string;
}

export interface RDSData extends CreateRdsDto {
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

export interface LoadBalancerContext {
  instances: Set<ALBData>;
  addInstance: (_instanceId: ALBData) => void;
  removeInstance: (_instanceId: ALBData) => void;
}

export interface RDSContext {
  instances: Set<RDSData>;
  addInstance: (_instanceId: RDSData) => void;
  removeInstance: (_instanceId: RDSData) => void;
}
