import { CreateRdsDto } from "../../store/types/requestDto";
import { client } from ".";

export const getRDSOption = async (id: string) => {
  const { data } = await client.get(`/rds/${id}`);

  return data;
};

export const createRDS = async (rds: CreateRdsDto) => {
  const { data } = await client.post("/rds", rds);

  return data;
};
