import { client } from ".";

export const getLoadBalancerOption = async (id: number) => {
  const { data } = await client.get(`/load-balancers/${id}`);

  return data;
};
