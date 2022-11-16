import { ALBData, InstanceData, RDSData } from "../../store/types/instanceContext";
import { CreateInstanceDto, CreateLoadBalancerDto, CreateRdsDto } from "../../store/types/requestDto";

export const removeInstanceIdsBeforePost = (instances: InstanceData[]) => {
  const currentInstances = instances.reduce((acc: CreateInstanceDto[], instance) => {
    const { id: _id, ...currentInstance } = instance;
    acc.push(currentInstance);
    return acc;
  }, []);

  return currentInstances;
};

export const removeALBIdsBeforePost = (instances: ALBData[]) => {
  const currentInstances = instances.reduce((acc: CreateLoadBalancerDto[], instance) => {
    const { id: _id, ...currentInstance } = instance;
    acc.push(currentInstance);
    return acc;
  }, []);

  return currentInstances;
};

export const removeRDSIdsBeforePost = (instances: RDSData[]) => {
  const currentInstances = instances.reduce((acc: CreateRdsDto[], instance) => {
    const { id: _id, ...currentInstance } = instance;
    acc.push(currentInstance);
    return acc;
  }, []);

  return currentInstances;
};
