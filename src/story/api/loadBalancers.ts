import { CreateLoadBalancerDto } from "../../store/types/requestDto";
import { client } from ".";

export const getLoadBalancerOption = async (id: string) => {
  const { data } = await client.get(`/load-balancers/${id}`);

  return data;
};

export const createLoadBalancer = async (loadBalancer: CreateLoadBalancerDto) => {
  const { data } = await client.post("/load-balancers", loadBalancer);

  return data;
};
