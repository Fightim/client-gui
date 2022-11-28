import { CreateRdsDto } from "../../store/types/requestDto";
import { client } from ".";

export const PATH = {
  rds: "/rds"
}

export const getRDSOption = async (id: string) => {
  const { data } = await client.get(`${PATH.rds}/${id}`);

  return data;
};

export const createRDS = async (rds: CreateRdsDto) => {
  const { data } = await client.post(PATH.rds, rds);

  return data;
};
