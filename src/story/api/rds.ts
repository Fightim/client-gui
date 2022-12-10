import { CreateRDSDto } from "../../store/types/requestDto";
import { client } from ".";

export const PATH = {
  rds: "/rds"
}

export const getRDS = async () => {
  const { data } = await client.get(PATH.rds);

  return data;
};

export const getRDSOption = async (rdsId: string) => {
  const { data } = await client.get(`${PATH.rds}/${rdsId}`);

  return data;
};

export const createRDS = async (rds: CreateRDSDto) => {
  const { data } = await client.post(PATH.rds, rds);

  return data;
};

export const deleteRDS = async (rdsId: string) => {
  const { data } = await client.delete(`${PATH.rds}/${rdsId}`);

  return data;
};
