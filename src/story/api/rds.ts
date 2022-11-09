import { client } from ".";

export const getRDSOption = async (id: string) => {
  const { data } = await client.get(`/rds/${id}`);

  return data;
};
