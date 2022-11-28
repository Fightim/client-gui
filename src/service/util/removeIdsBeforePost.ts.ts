import { ALBData, InstanceData, RDSData } from "../../store/types/instanceContext";
import { CreateInstanceDto, CreateLoadBalancerDto, CreateRdsDto } from "../../store/types/requestDto";

export const checkIsCurrentInstance = (_id: string) => +_id < 1;

export const removeInstanceIdsBeforePost = (instances: InstanceData[]): CreateInstanceDto[] => {
  const currentInstances = instances.reduce((acc: CreateInstanceDto[], instance) => {
    const { id: _id, ...currentInstance } = instance;

    if (checkIsCurrentInstance(_id)) {
      acc.push(currentInstance);
    }

    return acc;
  }, []);

  return currentInstances;
};

export const removeALBIdsBeforePost = (instance: ALBData): CreateLoadBalancerDto => {
  const { id: _id, ...currentInstance } = instance;

  return currentInstance;
};

export const removeRDSIdsBeforePost = (instance: RDSData): CreateRdsDto => {
  const { id: _id, ...currentInstance } = instance;

  return currentInstance;
};
