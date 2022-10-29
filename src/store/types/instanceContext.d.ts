/* eslint-disable no-unused-vars */
export interface InstanceContext {
  publicUbuntuInstances: Set<string>;
  addPublicUbuntuInstances: (instanceId: string) => void;
  removePublicUbuntuInstances: (instanceId: string) => void;
  publicCentosInstances: Set<string>;
  addPublicCentosInstances: (instanceId: string) => void;
  removePublicCentosInstances: (instanceId: string) => void;
  privateUbuntuInstances: Set<string>;
  addPrivateUbuntuInstances: (instanceId: string) => void;
  removePrivateUbuntuInstances: (instanceId: string) => void;
  privateCentosInstances: Set<string>;
  addPrivateCentosInstances: (instanceId: string) => void;
  removePrivateCentosInstances: (instanceId: string) => void;
}

export interface RDSContext {
  instances: Set<string>;
  addInstance: (instanceId: string) => void;
  removeInstance: (instanceId: string) => void;
}

export interface LoadBalancerContext {
  instances: Set<string>;
  addInstance: (instanceId: string) => void;
  removeInstance: (instanceId: string) => void;
}
