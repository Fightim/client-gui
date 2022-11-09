import { client } from ".";

export const getInstanceOption = async (id: string) => {
  const { data } = await client.get(`/instances/${id}`);

  return data;
};
