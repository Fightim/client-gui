import { useQuery } from "react-query";

import { CreateInstanceDto } from "../../../store/types/requestDto";
import { getInstanceOption, postInstances } from "../../../story/api/instances";
import { QUERY_KEY } from "./keys";

export const useFetchInstanceOption = (id: string) => {
  const { data } = useQuery([QUERY_KEY.option, id], () => getInstanceOption(id));

  return {
    instanceOption: data,
  };
};

export const useCreateInstances = (instances: CreateInstanceDto[]) => {
  const { data } = useQuery([QUERY_KEY.create_instances], () => postInstances(instances));

  return {
    instances: data,
  };
};
