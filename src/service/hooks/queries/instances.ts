import { useQuery } from "react-query";

import { InstanceIconType } from "../../../store/types/instanceIcon.d";
import { getInstanceOption } from "../../../story/api/instances";

const QUERY_KEY = {
  option: "option",
  type: "type",
};

export const useFetchOption = (id: string, type: InstanceIconType) => {
  const fetcher = () => getInstanceOption(id);
  const { data } = useQuery([QUERY_KEY.option, type, id], fetcher);

  return {
    instanceOption: data,
  };
};
