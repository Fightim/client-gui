import { CreateLoadBalancerDto } from "../../store/types/requestDto";
import { client } from ".";

const PATH = {
  loadBalancers: "/load-balancers"
}

export const getLoadBalancerOption = async (id: string) => {
  const { data } = await client.get(`${PATH.loadBalancers}/${id}`);

  return data;
};

export const createLoadBalancer = async (loadBalancer: CreateLoadBalancerDto) => {
  const { data } = await client.post(PATH.loadBalancers, loadBalancer);

  return data;
};
