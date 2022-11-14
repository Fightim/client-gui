import { useQuery } from "react-query";

import { getLoadBalancerOption } from "../../../story/api/loadBalancers";
import { QUERY_KEY } from "./keys";

export const useFetchLoadBalancerOption = (id: string) => {
  const fetcher = () => getLoadBalancerOption(id);
  const { data } = useQuery([QUERY_KEY.option, id], fetcher);

  return {
    loadBalancerOption: data,
  };
};
