import { client } from ".";

export const getInstanceOption = async (id: number) => {
  const { data } = await client.get(`/instances/${id}`);

  return data;
};
