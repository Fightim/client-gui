import { CreateInstanceDto } from "../../store/types/requestDto";
import { client } from ".";

export const PATH = {
  instances: "/instances"
}

export const getInstances = async () => {
  const { data } = await client.get(PATH.instances);

  return data;
};

export const getInstanceOption = async (instanceId: string) => {
  const { data } = await client.get(`${PATH.instances}/${instanceId}`);

  return data;
};

export const createInstances = async (instances: CreateInstanceDto[]) => {
  const { data } = await client.post(PATH.instances, instances);

  return data;
};

export const deleteInstances = async (instanceId: string) => {
  const { data } = await client.delete(`${PATH.instances}/${instanceId}`);

  return data;
};
