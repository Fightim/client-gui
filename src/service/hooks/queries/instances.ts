import { useQuery } from "react-query";
import { InstanceResponseDto } from "../../../store/types/responseDto";

import { getInstanceOption, getInstances } from "../../../story/api/instances";
import { QUERY_KEY } from "./keys";

export const useFetchInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>(QUERY_KEY.get_instances, () => getInstances());

  return {
    instances: data,
  };
};

export const useFetchInstanceOption = (id: string) => {
  const { data } = useQuery([QUERY_KEY.option, id], () => getInstanceOption(id));

  return {
    instanceOption: data,
  };
};

