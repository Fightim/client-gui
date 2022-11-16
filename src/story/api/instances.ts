import { CreateInstanceDto } from "../../store/types/requestDto";
import { client } from ".";

export const getInstanceOption = async (id: string) => {
  const { data } = await client.get(`/instances/${id}`);

  return data;
};

export const createInstances = async (instances: CreateInstanceDto[]) => {
  const { data } = await client.post("/instances", instances);

  return data;
};
