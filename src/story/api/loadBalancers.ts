import { client } from ".";

export const getLoadBalancerOption = async (id: string) => {
  const { data } = await client.get(`/load-balancers/${id}`);

  return data;
};
