import { client } from ".";

export const getRDSOption = async (id: number) => {
  const { data } = await client.get(`/rds/${id}`);

  return data;
};
